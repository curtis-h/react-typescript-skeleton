import { Action } from "./action";
import { AppStateKeys, StoreStatus } from "../types";

export class DataLoadAction<T> extends Action {
  constructor(
    public readonly store: AppStateKeys,
    public readonly data: T,
    public readonly status: StoreStatus,
    public readonly error?: Error
  ) {
    super();
  }
}
