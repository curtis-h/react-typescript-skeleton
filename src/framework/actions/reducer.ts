import { DataLoadAction } from "./dataLoadAction";
import { AppState } from "../types";
import { NavigateAction } from "./navigateAction";
import { PageKeys } from "@src/containers";

export type AllActions = DataLoadAction<any> | NavigateAction<PageKeys>;
export type AppDispatch = React.Dispatch<AllActions>;

export const reducer: React.Reducer<AppState, AllActions> = (state, action) => {
  console.log(action);
  const result = Object.assign({}, state);

  if(action instanceof DataLoadAction) {
    result[action.store] = {
      data: action.data,
      status: action.status
    };
  }

  if(action instanceof NavigateAction) {
    result.router = {
      page: action.page,
      params: action.params
    };
  }

  return result;
}
