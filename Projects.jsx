import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Students Cafeteria Management System',
      description: 'A comprehensive system for managing student cafeteria operations including menu management, orders, and inventory tracking.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
      github: '#',
      demo: '#',
      color: 'green'
    },
    {
      title: 'Fertilizer Distribution Management System',
      description: 'Web-based system for managing fertilizer distribution, tracking inventory, orders, and delivery to farmers efficiently.',
      tech: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS'],
      github: '#',
      demo: '#',
      color: 'yellow'
    },
    {
      title: 'Task Management System',
      description: 'Interactive task management application for organizing, tracking, and completing tasks with an intuitive user interface.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: '#',
      demo: '#',
      color: 'red'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`project-card project-${project.color}`}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
