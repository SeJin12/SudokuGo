import { combineReducers } from "redux";
import infoSlice from "../slices/info";


const rootReducer = combineReducers({
    infoReducer: infoSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;