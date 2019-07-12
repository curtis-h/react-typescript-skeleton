import React, { StatelessComponent } from "react";
import { AppState } from "./framework/types";
import { DataStore } from "./stores/datastore";
import { reducer } from "./framework/actions/reducer";
import { RouterContainer } from "./containers/routerContainer";


const initialState: AppState = {} as any;
const stateStore = new DataStore(/* initialState */);
const AppContext = React.createContext(stateStore);
export const useAppState = () => React.useContext(AppContext);

export const App: StatelessComponent = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  stateStore.bind(state, dispatch);

  return (
    <AppContext.Provider value={stateStore}>
      <RouterContainer />
    </AppContext.Provider>
  );
}

const A: StatelessComponent = (props) => {
  const state = useAppState();
  const userStore = state.userStore;
  const user = userStore.data;

  return (
    <div onClick={() => userStore.updateName(user.name + "a")}>
      A : {user.name}
      {props.children}
    </div>
  );
}
