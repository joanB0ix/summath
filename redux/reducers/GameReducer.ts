import { Problem } from "interfaces/Problem.interface";
import { Action, ActionType } from "redux/actionTypes/Game.actionTypes";

interface IInitialState {
  isGameRunning: boolean;
  problem: Problem;
}

const initialState: IInitialState = {
  problem: {
    firstFactor: 0,
    operation: "-",
    secondFactor: 0,
    solution: 0,
  },
  isGameRunning: false,
};

export const gameReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_NEW_PROBLEM:
      return {
        ...state,
        problem: action.payload,
      };
    case ActionType.SET_GAME_RUNNING:
      return {
        ...state,
        isGameRunning: action.payload,
      };
    default:
      return state;
  }
};
