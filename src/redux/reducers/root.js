import { combineReducers } from "redux";

import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  visitors: profileReducer,
});

export default rootReducer;
