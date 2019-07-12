import { RouterState } from "@src/framework/types";
import { AppDispatch } from "@src/framework/actions/reducer";
import { NavigateAction } from "@src/framework/actions/navigateAction";
import { PageKeys, Pages } from "@src/containers";

export class RouterStore {
  constructor(
    private readonly _getState: () => RouterState,
    private readonly _dispatch: () => AppDispatch
  ) {}

  private get state() {
    return this._getState() || {};
  }

  private get dispatch() {
    return this._dispatch();
  }

  get page() {
    return this.state.page;
  }

  get params() {
    return this.state.params;
  }

  navigate<T extends PageKeys>(to: SimplePage<T>): void;
  navigate<T extends PageKeys>(to: T, params: inferParams<T>): void;
  navigate<T extends PageKeys>(to: T, params: inferParams<T> = {} as any) {
    this.dispatch(new NavigateAction(to, params));
  }

}

type inferParams<T extends PageKeys> = Pages[T] extends React.FunctionComponent<infer P> ? {} extends P ? never : P : never;

type SimplePage<T extends PageKeys> = inferParams<T> extends never ? T : never;
