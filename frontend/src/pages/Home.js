import React from 'react';
import { Link } from 'react-router-dom';
import SarthakPhoto1 from '../images/SarthakPhoto1.jpeg';

const Home = () => {
  return (
    <div className="page">
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '80vh',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <h1>Sarthak Matte</h1>
            <div style={{
              fontSize: '1.5rem',
              color: '#48bb78',
              marginBottom: '1.5rem',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              Cloud/DevOps Engineer & Full Stack Developer
            </div>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              color: '#a0aec0',
              maxWidth: '500px'
            }}>
              Building scalable, resilient systems with cutting-edge cloud technologies 
              and DevOps practices. Passionate about creating efficient solutions 
              and continuously learning new technologies.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <Link to="/projects" className="btn">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <div style={{
                background: 'rgba(49, 130, 206, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                color: '#63b3ed',
                border: '1px solid rgba(49, 130, 206, 0.3)'
              }}>
                AWS
              </div>
              <div style={{
                background: 'rgba(49, 130, 206, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                color: '#63b3ed',
                border: '1px solid rgba(49, 130, 206, 0.3)'
              }}>
                DevOps
              </div>
              <div style={{
                background: 'rgba(49, 130, 206, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                color: '#63b3ed',
                border: '1px solid rgba(49, 130, 206, 0.3)'
              }}>
                C++
              </div>
              <div style={{
                background: 'rgba(49, 130, 206, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                color: '#63b3ed',
                border: '1px solid rgba(49, 130, 206, 0.3)'
              }}>
                SQL
              </div>
              <div style={{
                background: 'rgba(49, 130, 206, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                color: '#63b3ed',
                border: '1px solid rgba(49, 130, 206, 0.3)'
              }}>
                React
              </div>
            </div>
          </div>
          <div style={{
            flex: '1',
            minWidth: '300px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img 
              src={SarthakPhoto1} 
              alt="Sarthak Matte"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '400px',
                borderRadius: '10px',
                border: '3px solid #48bb78',
                boxShadow: '0 0 30px rgba(72, 187, 120, 0.3)',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;