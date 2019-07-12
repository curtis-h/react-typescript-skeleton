import React from "react";
import { useAppState } from "@src/app";

export const LoginContainer: React.StatelessComponent = (props) => {
  const state = useAppState();
  const userStore = state.userStore;

  if(!userStore.isLoggedIn()) {
    return (
      <div onClick={() => userStore.login(state.router)}>No User</div>
    );
  }

  return (<div>{props.children}</div>);
}
