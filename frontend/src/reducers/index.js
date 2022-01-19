import { combineReducers } from "redux";

import posts from "./posts";
// google ::
import auth from "./auth"

export default combineReducers({ posts, auth });
