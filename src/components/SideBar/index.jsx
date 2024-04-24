import { PropTypes } from "prop-types";
import Button from "../Button";

const SideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-2/3 px-4 py-16 bg-stone-900 text-stone-50 md:w-[18%] rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>

      <ul className="mt-8">
        {projects.map((project) => {
          let buttonStyles =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            buttonStyles += " text-stone-200 bg-stone-800";
          } else {
            buttonStyles += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={buttonStyles}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;

SideBar.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
  projects: PropTypes.array,
  onSelectProject: PropTypes.func.isRequired,
  selectedProjectId: PropTypes.number,
};
