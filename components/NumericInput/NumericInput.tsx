//Interfaces
import { INumericInput } from "./NumericInput.interface";

//Styles
import styles from "./NumericInput.module.scss";

const NumericInput = ({ value, setValue, onEnter }: INumericInput) => {
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && value.length > 0) {
      onEnter();
      setValue(null);
    }
  };

  const handleValueChange = (event: any) => {
    if (event.target.validity.valid) {
      setValue(event.target.value);
    } else {
      console.error("Value not a number");
    }
  };

  return (
    <div className={styles.container}>
      <input
        onChange={handleValueChange}
        pattern="[0-9]*"
        onKeyDown={handleKeyDown}
        type={"text"}
        inputMode="numeric"
        value={value}
        autoFocus
        className={styles.input}></input>
    </div>
  );
};

export default NumericInput;
