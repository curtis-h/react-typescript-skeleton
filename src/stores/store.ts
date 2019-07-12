import { StateStore } from "@src/framework/types";
import { AppDispatch } from "@src/framework/actions/reducer";

export class Store<T> {
  constructor(
    private readonly _getState: () => StateStore<T>,
    private readonly _dispatch: () => AppDispatch
  ) {}

  private get state() {
    return this._getState() || {};
  }

  get data(): T {
    return this.state.data;
  }

  get status() {
    return this.state.status || "Preload";
  }

  get dispatch() {
    return this._dispatch();
  }
}
