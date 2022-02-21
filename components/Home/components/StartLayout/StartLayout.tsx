import Button from "components/Button/Button";
import { useAppSelector } from "hooks";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { setIsGameRunning } from "redux/actionCreators/Game.actionCreators";

//Interfaces
import { IStartLayout } from "./StartLayout.interface";

//Styles
import styles from "./StartLayout.module.scss";

const StartLayout = ({ setIsGameRunning }: IStartLayout) => {
  const currentScore = useAppSelector((state) => state.user.score);

  return (
    <div className={styles.container}>
      <div>Previous score: {currentScore}</div>
      <Button text="PLAY" action={() => setIsGameRunning(true)} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    setIsGameRunning: (isGameRunning: boolean) => dispatch(setIsGameRunning(isGameRunning)),
  };
};

export default connect(null, mapDispatchToProps)(StartLayout);
