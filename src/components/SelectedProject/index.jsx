import { PropTypes } from "prop-types";
import Tasks from "../Tasks";

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  console.log("Ye hai na date", project.dueDate);

  return (
    <div className="w-[50%] pt-16 pl-10">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} tasks={tasks} onDelete={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;

SelectedProject.propTypes = {
  project: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};
