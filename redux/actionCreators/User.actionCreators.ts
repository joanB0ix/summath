import { Dispatch } from "redux";
import { Action as UserAction, ActionType as UserActionType } from "redux/actionTypes/User.actionTypes";
import { Action as GameAction, ActionType as GameActionType } from "redux/actionTypes/Game.actionTypes";

export const setUserScore = (userScore: number) => {
  return async (dispatch: Dispatch<UserAction | GameAction>) => {
    dispatch({
      type: UserActionType.SET_USER_SCORE,
      payload: userScore,
    });
  };
};

export const setUserSolution = (userSolution: number | null) => {
  return async (dispatch: Dispatch<UserAction | GameAction>) => {
    dispatch({
      type: UserActionType.SET_USER_SOLUTION,
      payload: userSolution,
    });
  };
};

export const checkProblemSolution = (userSolution: number, problemSolution: number, currentScore: number) => {
  return async (dispatch: Dispatch<UserAction | GameAction>) => {
    if (userSolution == problemSolution) {
      dispatch({
        type: UserActionType.SET_USER_SCORE,
        payload: currentScore + 1,
      });
    } else {
      dispatch({
        type: GameActionType.SET_GAME_RUNNING,
        payload: false,
      });
    }
  };
};
