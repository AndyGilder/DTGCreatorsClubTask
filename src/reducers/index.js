import { combineReducers } from "redux";
import modListReducer from "./modListReducer";
import modDetailsReducer from "./modDetailsReducer";

const rootReducer = combineReducers({
    modListReducer,
    modDetailsReducer,
});

export default rootReducer;
