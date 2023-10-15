
import resource from "./resource";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  resource
});


export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
