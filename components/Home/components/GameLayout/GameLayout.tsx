import NumericInput from "components/NumericInput/NumericInput";
import Timer from "components/Timer/Timer";
import { useAppSelector } from "hooks";
import { useState } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getNewProblem, setIsGameRunning } from "redux/actionCreators/Game.actionCreators";
import { checkProblemSolution, setUserSolution } from "redux/actionCreators/User.actionCreators";

//Interfaces
import { IGameLayout } from "./GameLayout.interface";

//Styles
import styles from "./GameLayout.module.scss";

const GameLayout = ({ checkProblemSolution, setUserSolution, getNewProblem, setIsGameRunning }: IGameLayout) => {
  const problem = useAppSelector((state) => state.game.problem);
  const isGameRunning = useAppSelector((state) => state.game.isGameRunning);
  const userSolution = useAppSelector((state) => state.user.userSolution);
  const currentScore = useAppSelector((state) => state.user.score);

  const checkIfProblemSolved = () => {
    checkProblemSolution(userSolution ? userSolution : 0, problem.solution, currentScore);
    getNewProblem();
  };

  return (
    <div className={styles.container}>
      <div className={styles.problem}>{problem.firstFactor + " " + problem.operation + " " + problem.secondFactor}</div>
      <div>
        <NumericInput
          value={userSolution ? userSolution : ""}
          setValue={setUserSolution}
          onEnter={() => checkIfProblemSolved()}
        />
      </div>
      <div className={styles.score}>Score:{currentScore}</div>
      <div>
        <Timer isActive={isGameRunning} endingAction={() => setIsGameRunning(false)} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    checkProblemSolution: (userSolution: number, problemSolution: number, currentScore: number) =>
      dispatch(checkProblemSolution(userSolution, problemSolution, currentScore)),
    setUserSolution: (userSolution: number) => dispatch(setUserSolution(userSolution)),
    getNewProblem: () => dispatch(getNewProblem()),
    setIsGameRunning: (isGameRunning: boolean) => dispatch(setIsGameRunning(isGameRunning)),
  };
};

export default connect(null, mapDispatchToProps)(GameLayout);
