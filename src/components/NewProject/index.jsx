import { useRef } from "react";
import { PropTypes } from "prop-types";
import InputBox from "../InputBox";
import DialogBox from "../DialogBox";

const NewProject = ({ onAdd, onCancel }) => {
  const dialogBox = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dueDateInputRef = useRef();

  const handleSaveData = () => {
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDueDate = dueDateInputRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      dialogBox.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueData: enteredDueDate,
    });

    titleInputRef.current.value = "";

    descriptionInputRef.current.value = "";

    dueDateInputRef.current.value = "";
  };

  return (
    <>
      <DialogBox ref={dialogBox} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Data</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter the values.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provided a valid value for every input field.
        </p>
      </DialogBox>
      <div className="w-[50%] mt-16 ml-10 h-full">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveData}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <InputBox ref={titleInputRef} type="text" required label="Title" />
          <InputBox
            ref={descriptionInputRef}
            label="Description"
            textarea
            rows="6"
            required
          />
          <InputBox
            ref={dueDateInputRef}
            type="date"
            required
            label="Due Date"
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;

NewProject.propTypes = {
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};
