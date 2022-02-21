import { useEffect, useState } from "react";

//Interfaces
import { ITimer } from "./Timer.interface";

//Styles
import styles from "./Timer.module.scss";

const Timer = ({ isActive, endingAction }: ITimer) => {
  const [seconds, setSeconds] = useState<number>(60);

  useEffect(() => {
    if (seconds === 0) {
      endingAction();
    }
  }, [seconds]);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return <div className={styles.container}>Time: {seconds}s</div>;
};

export default Timer;
