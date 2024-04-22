import { PropTypes } from "prop-types";
import Button from "../Button";

const SideBar = ({ onStartAddProject, projects }) => {
  return (
    <aside className="w-2/3 px-4 py-16 bg-stone-900 text-stone-50 md:w-[18%] rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>

      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;

SideBar.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
  projects: PropTypes.array,
};
