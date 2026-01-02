import React, { useState } from 'react';
// Import your photo
import sarthakPhoto from '../images/SarthakPhoto2.JPG';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabContents = {
    skills: (
      <div>
        <h3>Technical Skills</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem'}}>
          <div className="card">
            <h4>Frontend Development</h4>
            <p>React, HTML5, CSS3, JavaScript</p>
          </div>
          <div className="card">
            <h4>Cloud & DevOps</h4>
            <p>AWS, Docker, Kubernetes, Jenkins, CI/CD, Linux, Git</p>
          </div>
          <div className="card">
            <h4>Programming Languages</h4>
            <p>C++ (Proficient), SQL (Proficient), JavaScript</p>
          </div>
        </div>
      </div>
    ),
    experience: (
      <div>
        <h3>Professional Experience</h3>
        <div className="card" style={{marginTop: '1rem'}}>
          <h4>2022 - Present</h4>
          <p><strong>Cloud Practitioner & Full Stack Developer</strong></p>
          <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
            <li>Developing web applications using MERN stack</li>
            <li>Learning and implementing cloud solutions on AWS</li>
            <li>Building responsive and user-friendly interfaces</li>
            <li>Working on database design and API development</li>
          </ul>
        </div>
      </div>
    ),
    education: (
      <div>
        <h3>Education Background</h3>
        <div className="card" style={{marginTop: '1rem'}}>
          <h4>MIT Academy of Engineering, Pune</h4>
          <p><strong>B.Tech in Computer Science (2022-2026)</strong></p>
          <p>Currently pursuing third year with focus on Cloud Computing and Web Technologies</p>
        </div>
        <div className="card" style={{marginTop: '1rem'}}>
          <h4>Janata Mahavidyalaya, Chandrapur</h4>
          <p><strong>HSC (XII) (2020-2022)</strong></p>
          <p>Secured 81.33% in PCM Group with Computer Science as additional subject</p>
        </div>
        <div className="card" style={{marginTop: '1rem'}}>
          <h4>Mount Carmel Convent High School, Chandrapur</h4>
          <p><strong>AISSC (X) (2007-2020)</strong></p>
          <p>Served as Asst. Head Boy of School in Grade IX in academic year 2018-2019</p>
        </div> 
      </div>
    )
  };

  return (
    <div className="page">
      <div className="container">
        <h2>About Me</h2>
        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <img 
              src={sarthakPhoto} 
              alt="Sarthak Matte"
              style={{
                width: '100%',
                borderRadius: '10px',
                border: '2px solid #3182ce',
                height: '500px',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{flex: '2', minWidth: '300px'}}>
            <div className="card">
              <h3>Computer Engineer</h3>
              <p style={{marginBottom: '1.5rem', lineHeight: '1.8'}}>
                Hello, I'm Sarthak Matte from Chandrapur, Maharashtra. I'm a passionate 
                Computer Science student with strong interest in Cloud Computing, 
                Web Development, and DevOps practices. I believe in continuous learning 
                and staying updated with the latest technologies.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2rem',
                borderBottom: '1px solid #2d3748',
                paddingBottom: '1rem'
              }}>
                {['skills', 'experience', 'education'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeTab === tab ? '#48bb78' : '#a0aec0',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      padding: '0.5rem 0',
                      position: 'relative'
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {activeTab === tab && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-11px',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        background: '#48bb78'
                      }}></div>
                    )}
                  </button>
                ))}
              </div>
              
              <div>
                {tabContents[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;