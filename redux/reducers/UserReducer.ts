import { Action, ActionType } from "redux/actionTypes/User.actionTypes";

interface IInitialState {
  score: number;
  userSolution: number | null;
}

const initialState: IInitialState = {
  score: 0,
  userSolution: null,
};

export const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case ActionType.SET_USER_SOLUTION:
      return {
        ...state,
        userSolution: action.payload,
      };
    default:
      return state;
  }
};
