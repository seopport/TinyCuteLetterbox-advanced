import { createStore } from "redux";
import { combineReducers } from "redux";
import letters from "store/redux/modules/letters";

const rootReducer = combineReducers({
  letters,
});
const store = createStore(rootReducer);

export default store;
