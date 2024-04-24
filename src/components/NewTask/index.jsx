import { useState } from "react";
import { PropTypes } from "prop-types";
import InputBox from "../InputBox";
import Button from "../Button";

const NewTask = ({ onAddNewTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChangeTask = (event) => {
    setEnteredTask(event.target.value);
    const newValue = setEnteredTask(event.target.value);
    console.log(newValue);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAddNewTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <div>
      <InputBox
        value={enteredTask}
        onChange={handleChangeTask}
        label="Add Task"
        autoFocus
      />
      <Button onClick={handleClick}>+ Add Task</Button>
    </div>
  );
};

export default NewTask;

NewTask.propTypes = {
  onAddNewTask: PropTypes.func,
};
