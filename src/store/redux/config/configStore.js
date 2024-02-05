import { createStore } from "redux";
import { combineReducers } from "redux";
import letters from "store/redux/modules/letters";
import { character } from "store/redux/modules/character";

const rootReducer = combineReducers({
  letters,
  character,
});
const store = createStore(rootReducer);

export default store;
