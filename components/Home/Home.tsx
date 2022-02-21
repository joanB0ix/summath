import { useAppSelector } from "hooks";
import type { NextPage } from "next";
import { useEffect } from "react";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getNewProblem } from "redux/actionCreators/Game.actionCreators";
import { setUserScore, setUserSolution } from "redux/actionCreators/User.actionCreators";
import GameLayout from "./components/GameLayout/GameLayout";
import StartLayout from "./components/StartLayout/StartLayout";
import { IHome } from "./Home.interface";

import styles from "./Home.module.scss";

const Home: NextPage<IHome> = ({ getNewProblem, setUserSolution, setUserScore }) => {
  const isGameRunning = useAppSelector((state) => state.game.isGameRunning);

  useEffect(() => {
    if (isGameRunning) {
      getNewProblem();
      setUserSolution(null);
      setUserScore(0);
    }
  }, [isGameRunning]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Summath</span>
      <div className={styles.game}>
        {isGameRunning && <GameLayout />}
        {!isGameRunning && <StartLayout />}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getNewProblem: () => dispatch(getNewProblem()),
    setUserSolution: (userSolution: number | null) => dispatch(setUserSolution(userSolution)),
    setUserScore: (score: number) => dispatch(setUserScore(score)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
