import { Store } from "./store";
import { Character } from "@src/api/characters";
import { DataLoadAction } from "@src/framework/actions/dataLoadAction";
import Api from "@src/api";

export class CharacterStore extends Store<Character[]> {
  load() {
    this.dispatch(new DataLoadAction("characters", null, "Loading"));

    Api.Characters.loadAll().then(characters => {
      this.dispatch(new DataLoadAction("characters", characters, "Done"));
    });
  }
}
