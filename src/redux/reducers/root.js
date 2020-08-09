import {
  combineReducers
} from "redux";

import userReducer from "./userReducer";
import videoReducer from "./videoReducer";
import queryReducer from "./queryReducer";

const rootReducer = combineReducers({
  user: userReducer,
  video: videoReducer,
  query: queryReducer
});

export default rootReducer;