import { PropTypes } from "prop-types";
import Button from "../Button";

const SelectedProject = ({ project }) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[82%] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <Button>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">Description</p>
      </header>
      TASKS
    </div>
  );
};

export default SelectedProject;

SelectedProject.propTypes = {
  project: PropTypes.object.isRequired,
};
