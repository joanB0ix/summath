export interface IGameLayout {
  checkProblemSolution: (userSolution: number, problemSolution: number, currentScore: number) => void;
  setUserSolution: (userSolution: number) => void;
  getNewProblem: () => void;
  setIsGameRunning: (isGameRunning: boolean) => void;
}
