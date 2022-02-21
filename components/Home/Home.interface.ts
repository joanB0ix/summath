export interface IHome {
  getNewProblem: () => void;
  setUserSolution: (userSolution: number | null) => void;
  setUserScore: (score: number) => void;
}
