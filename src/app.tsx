import React, { StatelessComponent, useContext } from "react";

interface AppState {
  user: User;
}

interface User {
  name: string;
}

class Store<T> {
  constructor(
    public readonly data: T,
    protected readonly setData: (data: T) => void
  ) {}

  protected update(setter: (data: T) => void) {
    const newData = Object.assign({}, this.data);
    setter(newData);
    this.setData(newData);
  }
}

class DataStore extends Store<AppState> {
  public userStore: UserStore;

  constructor(data: AppState, setData: (data: AppState) => void) {
    super(data, setData);
    this.userStore = new UserStore(data.user, u => this.update(x => x.user = u));
  }
}

class UserStore extends Store<User> {
  public login(user: User) {
    this.setData(user);
  }

  public updateName(value: string) {
    this.update(x => x.name = value);
  }
}

const AppContext = React.createContext(new DataStore({} as any, () => {}));

const LoginContainer: StatelessComponent = (props) => {
  const state = useContext(AppContext);
  const userStore = state.userStore;

  if(!state.data.user) {
    return (
      <div onClick={() => userStore.login({ name: "test" })}>No User</div>
    );
  }

  return (<div>{props.children}</div>);
}

const A: StatelessComponent = (props) => {
  const state = useContext(AppContext);
  const userStore = state.userStore;
  const user = state.data.user;

  return (
    <div onClick={() => userStore.updateName(user.name + "a")}>
      A : {user.name}
      {props.children}
    </div>
  );
}

const B: StatelessComponent = (props) => {
  const state = useContext(AppContext);
  const userStore = state.userStore;
  const user = state.data.user;

  return (
    <div onClick={() => userStore.updateName(user.name + "b")}>
      B : {user.name}
      {props.children}
    </div>
  );
}

export const App: StatelessComponent = () => {
  const initialState: AppState = {} as any;
  const [state, setState] = React.useState(initialState);
  const stateStore = new DataStore(state, setState);

  return (
    <AppContext.Provider value={stateStore}>
      <LoginContainer>
        <A>
          <B></B>
        </A>
      </LoginContainer>
    </AppContext.Provider>
  );
}
