import { combineReducers } from "redux";
import counter from "./counter";
import class_reducer from './class_reducer';
const rootReducer = combineReducers({
    counter, class_reducer
  });
export default rootReducer;