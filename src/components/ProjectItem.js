import React from 'react';

function ProjectItem({ name, technologies }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <h2>{name}</h2>
      <div>
        {technologies.map((tech, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              padding: '0.25rem 0.5rem',
              margin: '0 0.25rem 0.25rem 0',
              backgroundColor: '#f0f0f0',
              borderRadius: '5px',
              fontSize: '0.85rem'
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
