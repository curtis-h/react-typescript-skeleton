import { Action } from "./action";
import { Pages, PageKeys } from "@src/containers";

type inferParams<T extends PageKeys> = Pages[T] extends React.FunctionComponent<infer P> ? P : never;

export class NavigateAction<T extends PageKeys> extends Action {
  constructor(
    public readonly page: T,
    public readonly params: inferParams<T> = {} as any
  ) {
    super();
  }
}
