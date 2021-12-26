import { combineReducers } from "redux";

import studentReducer from "./student";
import teacherReducer from "./teacher";

const rootReducer = combineReducers({
  Student: studentReducer,
  Teacher: teacherReducer,
});

export default rootReducer;
