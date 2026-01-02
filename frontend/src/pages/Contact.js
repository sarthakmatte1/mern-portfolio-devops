import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('/api/contact', formData);
      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <div className="page">
      <div className="container">
        <h2>Get In Touch</h2>
        <p style={{textAlign: 'center', marginBottom: '3rem', color: '#a0aec0'}}>
          Interested in collaborating or have questions? Feel free to reach out!
        </p>
        
        <div style={{
          display: 'flex',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          <div style={{flex: '1', minWidth: '300px'}}>
            <div className="card">
              <h3>Contact Information</h3>
              <div style={{marginTop: '2rem'}}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'rgba(30, 37, 48, 0.5)',
                  borderRadius: '5px'
                }}>
                  <div style={{
                    background: 'rgba(49, 130, 206, 0.2)',
                    padding: '0.8rem',
                    borderRadius: '50%',
                    marginRight: '1rem'
                  }}>
                    <i className="fas fa-envelope" style={{color: '#63b3ed'}}></i>
                  </div>
                  <div>
                    <h4 style={{margin: '0 0 0.3rem 0', color: '#e2e8f0'}}>Email</h4>
                    <p style={{margin: 0, color: '#a0aec0'}}>sarthakmatte1221@gmail.com</p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'rgba(30, 37, 48, 0.5)',
                  borderRadius: '5px'
                }}>
                  <div style={{
                    background: 'rgba(72, 187, 120, 0.2)',
                    padding: '0.8rem',
                    borderRadius: '50%',
                    marginRight: '1rem'
                  }}>
                    <i className="fas fa-phone" style={{color: '#48bb78'}}></i>
                  </div>
                  <div>
                    <h4 style={{margin: '0 0 0.3rem 0', color: '#e2e8f0'}}>Phone</h4>
                    <p style={{margin: 0, color: '#a0aec0'}}>+91 8975080365</p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1rem',
                  background: 'rgba(30, 37, 48, 0.5)',
                  borderRadius: '5px'
                }}>
                  <div style={{
                    background: 'rgba(236, 201, 75, 0.2)',
                    padding: '0.8rem',
                    borderRadius: '50%',
                    marginRight: '1rem'
                  }}>
                    <i className="fas fa-map-marker-alt" style={{color: '#ecc94b'}}></i>
                  </div>
                  <div>
                    <h4 style={{margin: '0 0 0.3rem 0', color: '#e2e8f0'}}>Location</h4>
                    <p style={{margin: 0, color: '#a0aec0'}}>Chandrapur, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div style={{marginTop: '2rem'}}>
                <h4>Connect with me</h4>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <a 
                    href="https://linkedin.com/in/sarthakmatte1221" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#a0aec0',
                      fontSize: '1.5rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#63b3ed'}
                    onMouseOut={(e) => e.target.style.color = '#a0aec0'}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a 
                    href="https://github.com/sarthakmatte" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#a0aec0',
                      fontSize: '1.5rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#63b3ed'}
                    onMouseOut={(e) => e.target.style.color = '#a0aec0'}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="https://twitter.com/realsrthk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#a0aec0',
                      fontSize: '1.5rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#63b3ed'}
                    onMouseOut={(e) => e.target.style.color = '#a0aec0'}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="https://instagram.com/sarthakmatte" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#a0aec0',
                      fontSize: '1.5rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#63b3ed'}
                    onMouseOut={(e) => e.target.style.color = '#a0aec0'}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{flex: '1', minWidth: '300px'}}>
            <div className="card">
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit} style={{marginTop: '2rem'}}>
                <div style={{marginBottom: '1.5rem'}}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: '#2d3748',
                      border: '1px solid #4a5568',
                      borderRadius: '5px',
                      color: '#e2e8f0',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                
                <div style={{marginBottom: '1.5rem'}}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: '#2d3748',
                      border: '1px solid #4a5568',
                      borderRadius: '5px',
                      color: '#e2e8f0',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                
                <div style={{marginBottom: '1.5rem'}}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: '#2d3748',
                      border: '1px solid #4a5568',
                      borderRadius: '5px',
                      color: '#e2e8f0',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn"
                  disabled={isSubmitting}
                  style={{width: '100%'}}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: submitMessage.includes('successfully') ? 'rgba(72, 187, 120, 0.2)' : 'rgba(245, 101, 101, 0.2)',
                    border: submitMessage.includes('successfully') ? '1px solid #48bb78' : '1px solid #f56565',
                    borderRadius: '5px',
                    color: submitMessage.includes('successfully') ? '#48bb78' : '#f56565',
                    textAlign: 'center'
                  }}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;