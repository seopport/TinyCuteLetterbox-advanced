import { createStore } from "redux";
import { combineReducers } from "redux";
import letters from "redux_/modules/letters";

const rootReducer = combineReducers({
  letters,
});
const store = createStore(rootReducer);

export default store;
