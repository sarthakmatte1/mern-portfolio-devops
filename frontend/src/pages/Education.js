import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "MIT Academy of Engineering, Pune",
      period: "2022 - 2026",
      status: "Currently Pursuing (Third Year)",
      details: "Focus on Cloud Computing, Web Technologies, and Software Engineering",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Computer Networks", "Cloud Computing", "AWS", "DevOps Tools", "Software Engineering"]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Janata Mahavidyalaya, Chandrapur",
      period: "2020 - 2022",
      score: "81.33%",
      details: "Science Stream with Computer Science",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Mount Carmel Convent High School, Chandrapur",
      period: "2007 - 2020",
      score: "93.2%",
      details: "All India Secondary School Certificate Examination",
      courses: ["Science", "Mathematics", "English", "Social Studies"]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2023",
      skills: ["Cloud Computing", "AWS Services", "Infrastructure"]
    },
    {
      name: "AWS Cloud Architecture",
      issuer: "Amazon Web Services",
      date: "2023",
      skills: ["Cloud Architecture", "Solution Design", "AWS Best Practices"]
    },
    {
      name: "Python Programming",
      issuer: "Cisco",
      date: "2023",
      skills: ["Python", "Programming", "Algorithm Design"]
    },
    {
      name: "C++ Programming",
      issuer: "Cisco",
      date: "2023",
      skills: ["C++", "OOP", "Data Structures"]
    },
    {
      name: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "2023",
      skills: ["Security", "Network Protection", "Cyber Threats"]
    },
    {
      name: "Web Development",
      issuer: "Infosys Springboard",
      date: "2023",
      skills: ["HTML", "CSS", "JavaScript", "Web Design"]
    },
    {
      name: "SQL Database Management",
      issuer: "Infosys Springboard",
      date: "2023",
      skills: ["SQL", "Database Design", "Oracle 9i"]
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h2>Education & Certifications</h2>
        
        <div style={{marginBottom: '4rem'}}>
          <h3 style={{textAlign: 'left', marginBottom: '2rem'}}>Academic Journey</h3>
          <div className="grid">
            {educationData.map((edu, index) => (
              <div key={index} className="card">
                <h4>{edu.degree}</h4>
                <p style={{color: '#63b3ed', marginBottom: '0.5rem'}}>{edu.institution}</p>
                <p style={{color: '#48bb78', fontFamily: 'JetBrains Mono, monospace', marginBottom: '1rem'}}>
                  {edu.period} {edu.score && `| ${edu.score}`}
                </p>
                <p style={{marginBottom: '1rem', color: '#a0aec0'}}>{edu.details}</p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {edu.courses.map((course, i) => (
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
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{textAlign: 'left', marginBottom: '2rem'}}>Professional Certifications</h3>
          <div className="grid">
            {certifications.map((cert, index) => (
              <div key={index} className="card">
                <h4>{cert.name}</h4>
                <p style={{color: '#63b3ed', marginBottom: '0.5rem'}}>{cert.issuer}</p>
                <p style={{color: '#48bb78', fontFamily: 'JetBrains Mono, monospace', marginBottom: '1rem'}}>
                  {cert.date}
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      style={{
                        background: 'rgba(49, 130, 206, 0.1)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#63b3ed',
                        border: '1px solid rgba(49, 130, 206, 0.3)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;