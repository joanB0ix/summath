export enum ActionType {
  SET_USER_SCORE = "SET_USER_SCORE",
  SET_USER_SOLUTION = "SET_USER_SOLUTION",
}

interface setUserScore {
  type: ActionType.SET_USER_SCORE;
  payload: number;
}

interface setUserSolution {
  type: ActionType.SET_USER_SOLUTION;
  payload: number | null;
}

export type Action = setUserScore | setUserSolution;
