import { useState } from "react";

//Interfaces
import { IButton } from "./Button.interface";

//Styles
import styles from "./Button.module.scss";

const Button = ({ text, action }: IButton) => {
  return (
    <button className={styles.button} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
