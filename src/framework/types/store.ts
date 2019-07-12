import { User } from "./user";
import { PageKeys } from "@src/containers";
import { Character } from "@src/api/characters";

export type StoreStatus = "Preload" | "Loading" | "Done" | "Stale" | "Error";

export interface StateStore<T> {
  data: T;
  status: StoreStatus;
}

type StateStores = StateStoreMap<{
  user: User;
  characters: Character[];
}>

export interface AppState extends StateStores {
  router: RouterState;
}

export interface RouterState {
  page: PageKeys;
  params: any;
}

export type AppStateKeys = keyof StateStores;

type StateStoreMap<T> = {
  [K in keyof T]: StateStore<T[K]>
}
