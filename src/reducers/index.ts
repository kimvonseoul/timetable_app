import { combineReducers } from "redux";
import counter from "./counter";
import class_reducer from './class_reducer';
import profile_reducer from './profile_reducer';
const rootReducer = combineReducers({
    counter, class_reducer, profile_reducer
  });
export default rootReducer;