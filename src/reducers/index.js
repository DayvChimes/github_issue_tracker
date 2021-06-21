import { combineReducers} from "redux";
import client from "../graphql/client";

import main from "./main";
import username from "./username";
import repository from "./repository";

export default combineReducers({
  main,
  username,
  repository,
});
