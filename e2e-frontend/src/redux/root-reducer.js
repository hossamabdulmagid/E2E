import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import NotesReducer from "./notes/note-reducer";

//blacklist
const persistConfig = {
    key: "root",
    storage,
    whitelist: [""],
};
//whitelist
const rootReducer = combineReducers({
    notes: NotesReducer,
});

export default persistReducer(persistConfig, rootReducer);
