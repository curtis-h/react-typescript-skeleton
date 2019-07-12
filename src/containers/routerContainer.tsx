import React from "react";
import { useAppState } from "@src/app";
import { Pages } from "@src/containers"

export const RouterContainer: React.StatelessComponent = () => {
  const state = useAppState();
  const userStore = state.userStore;
  const router = state.router;
  const page = userStore.isLoggedIn() ? router.page : "Login";

  switch(page) {
    case "Dashboard": return <Pages.Dashboard />;
    case "Login":     return <Pages.Login />
  }

  return (<div>not found</div>);
}
