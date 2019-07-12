import React from "react";
import { Store } from "@src/stores/store";

interface Props<T extends Store<any>> {
  store: T;
  loaded: (value: ExtractData<T>) => React.ReactElement;
}

type ExtractData<T> = T extends Store<infer P> ? P : never;

export const Loader = <T extends Store<any>>(props: Props<T>) => {
  const store = props.store;

  if(store.status === "Preload") {
    (store as any).load()
  }

  switch(store.status) {
    case "Loading": return <div>Loading</div>;
    case "Done":
    case "Stale":   return props.loaded(store.data);
    case "Error":   return <div>Error</div>;
    case "Preload":
    default:        return null;
  }
}
