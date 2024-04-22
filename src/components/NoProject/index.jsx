import { PropTypes } from "prop-types";
import noProjectImage from "../../assets/no-projects.png";
import Button from "../Button";

const NoProject = ({ onStartAddProject }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-center">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project</h2>
      <p className="text-stone-400 mb-8">
        Select a project or get started with new one
      </p>
      <Button onClick={onStartAddProject}>+ Create New Project</Button>
    </div>
  );
};

export default NoProject;

NoProject.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
};
