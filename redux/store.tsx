import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { gameReducer } from "./reducers/GameReducer";
import { userReducer } from "./reducers/UserReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
