import React from "react";
import { useAppState } from "@src/app";
import { Loader } from "@src/components/loader";

export const DashboardContainer: React.StatelessComponent = () => {
  const state = useAppState();

  return (
    <div>
      Dashboard
      <Loader store={state.characterStore} loaded={x => (<div>{x.length}</div>)} />
    </div>
  );
}
