import "../styling/project.css";
import reactIcon from "../images/react-icon.png";
import mongodbIcon from "../images/mongodb-icon.png";
import fastapiIcon from "../images/fastapi-1.svg";

function Projects() {
  // Sample data for projects
  const projectData = [
    {
      title: "Recommender System based on collaborative filtering",
      summary:
        "This project focuses on developing a recommendation system based on collaborative filtering techniques to predict user ratings for items. Leveraging historical user data, the system estimates how a user might rate an item they haven’t yet interacted with.",
      tools: [
        { name: "React", icon: reactIcon },
        { name: "FastAPI", icon: fastapiIcon },
        { name: "MongoDB", icon: mongodbIcon },
      ],
    },
    {
      title: "Personal Website",
      summary:
        "Created this website to showcase my skills, projects, and achievements in one central place. Through this website, I aim to present my work in a way that reflects who I am and what I can offer.",
      tools: [{ name: "React", icon: reactIcon }],
      website: "https://www.google.com", // Correct property name
    },
  ];

  return (
    <div className="project-container">
      <div className="title">Projects</div>
      <div className="project-box">
        {projectData.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-title">{project.title}</div>
            <div className="project-summary">{project.summary}</div>
            <div className="project-tools">
              {project.tools.map((tool, toolIndex) => (
                <div className="tool-item" key={toolIndex}>
                  <img
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    className="tool-icon"
                  />
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
            {/* Conditional rendering for the link */}
            {project.website && (
              <div className="project-link">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
