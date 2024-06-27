// src/pages/ProjectsPage.jsx

import projectsData from "./../projects-data.json";

function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map((project) => {
        return (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
