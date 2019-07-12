import { UserStore } from "./userStore";
import { AppState } from "@src/framework/types";
import { AppDispatch } from "@src/framework/actions/reducer";
import { RouterStore } from "./routerStore";
import { CharacterStore } from "./charactersStore";

export class DataStore {
  private state: AppState;
  private dispatch: AppDispatch;

  public router: RouterStore;
  public userStore: UserStore;
  public characterStore: CharacterStore;

  constructor() {
    this.state = {} as AppState;
    this.dispatch = () => {};

    this.router = new RouterStore(() => this.state.router, () => this.dispatch);
    this.userStore = new UserStore(() => this.state.user, () => this.dispatch);
    this.characterStore = new CharacterStore(() => this.state.characters, () => this.dispatch);
  }

  bind(state: AppState, dispatch: any) {
    this.state = state;
    this.dispatch = dispatch;
  }
}
