import { Store } from "./store";
import { User } from "@src/framework/types";
import { DataLoadAction } from "@src/framework/actions/dataLoadAction";
import { RouterStore } from "./routerStore";
import Api from "@src/api";

export class UserStore extends Store<User> {
  isLoggedIn() {
    return !!this.data;
  }

  login(router: RouterStore) {
    this.dispatch(new DataLoadAction("user", null, "Loading"));

    Api.App.login().then(user => {
      this.dispatch(new DataLoadAction("user", user, "Done"));
      router.navigate("Dashboard");
    })
    .catch(e => {
      this.dispatch(new DataLoadAction("user", e, "Error"));
    });
  }

  updateName(value: string) {
    // this.dispatch("updateName");
  }
}
