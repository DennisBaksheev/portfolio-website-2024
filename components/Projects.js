import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import projects from '../data/projectsData';

const Projects = () => {
  const openLink = (link) => {
    if (typeof link === 'string') {
      window.open(link, '_blank');
    } else if (Array.isArray(link)) {
      link.forEach(url => window.open(url, '_blank'));
    }
  };

  return (
    <section className="projects-section" id='projects'>
      {projects.map((project, index) => (
                <article className="project-wrapper" key={index}>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      openLink(project.link);
                    }}>
                      {project.title}
                    </a>
                  </h3>
                  <div className="project-description">
                    <div dangerouslySetInnerHTML={{ __html: project.description.replace('Live Website Demo', `<a href="#" class="live-demo-link" onClick="event.preventDefault(); window.open('${project.link}', '_blank')">Live Website Demo</a>`) }} />
                  </div>
                  <ul className="project-tech-list">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      openLink(project.github);
                    }}>
                      <FontAwesomeIcon icon={faGithub} size="2x" style={{ height: '1.5em' }}/>
                    </a>
                  </div>
                </div>
                <div className="project-image">
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    openLink(project.link);
                  }}>
                    <Image
                      src={project.image}
                      alt={`${project.title} project`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </a>
                </div>
        </article>
      ))}
    </section>
  )
}

export default Projects;