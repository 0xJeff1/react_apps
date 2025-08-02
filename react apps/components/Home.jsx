import '../src/App.css';

const Home = ({ projects }) => {
  return (
    <div className="container">
      
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    className="project-link view-project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="link-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    View Project
                  </a>
                  <a
                    href={project.figmaLink}
                    className="project-link figma-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.5 0H8.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5h7c3.038 0 5.5-2.462 5.5-5.5S18.538 0 15.5 0z" />
                      <path d="M8.5 11c-3.038 0-5.5 2.462-5.5 5.5S5.462 22 8.5 22s5.5-2.462 5.5-5.5V11H8.5z" />
                      <circle cx="17" cy="16.5" r="5.5" />
                    </svg>
                    View in Figma
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
