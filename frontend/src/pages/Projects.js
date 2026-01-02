import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Dashboard",
      description: "A comprehensive dashboard for monitoring and managing cloud resources across multiple providers with real-time analytics and automated scaling.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
      category: "Cloud/DevOps",
      status: "In Progress"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, inventory management, and admin dashboard.",
      technologies: ["MERN Stack", "Stripe API", "JWT", "Redux"],
      category: "Web Development",
      status: "Completed"
    },
    {
      title: "DevOps CI/CD Pipeline",
      description: "Automated CI/CD pipeline for web applications with testing, security scanning, and deployment to cloud environments.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Git"],
      category: "DevOps",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with modern web technologies to showcase projects and skills.",
      technologies: ["React", "CSS3", "Node.js", "MongoDB"],
      category: "Web Development",
      status: "Completed"
    },
    {
      title: "HealthBERT",
      description: "Aspect Based Sentiment Analysis using BERT for Healthcare Industry",
      technologies: ["Python","Fine-Tuned BERT"],
      category: "Machine Learning, Deep Learning",
      status: "Completed" 
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#48bb78';
      case 'In Progress': return '#3182ce';
      case 'Planning': return '#ecc94b';
      default: return '#a0aec0';
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h2>Projects & Certifications</h2>
        <p style={{textAlign: 'center', marginBottom: '3rem', color: '#a0aec0'}}>
          A collection of my technical projects and professional certifications
        </p>
        
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <h3>{project.title}</h3>
                <span style={{
                  background: getStatusColor(project.status),
                  color: '#1a202c',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {project.status}
                </span>
              </div>
              
              <p style={{color: '#a0aec0', marginBottom: '1.5rem', lineHeight: '1.6'}}>
                {project.description}
              </p>
              
              <div style={{marginBottom: '1.5rem'}}>
                <strong style={{color: '#63b3ed'}}>Technologies:</strong>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem'}}>
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      style={{
                        background: 'rgba(72, 187, 120, 0.1)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#48bb78',
                        border: '1px solid rgba(72, 187, 120, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  background: 'rgba(49, 130, 206, 0.1)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  color: '#63b3ed',
                  border: '1px solid rgba(49, 130, 206, 0.3)'
                }}>
                  {project.category}
                </span>
                
                {/* Removed View Code and Live Demo buttons */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;