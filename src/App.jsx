import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: text,
        projectID: prevState.selectedProjectId,
        id: taskID,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleCancelProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  let content = (
    <SelectedProject
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
      project={selectedProject}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-full flex w-full">
      <SideBar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      <div className="w-[82%] h-full">{content}</div>
    </main>
  );
}

export default App;
