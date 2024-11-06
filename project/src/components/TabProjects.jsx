import React from 'react'

function TabProjects({ data }) {
  return (
    <div className="text-textPrimary">
      <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
      <ul>
        {data.map(project => (
          <li key={project.id}>
            <strong>{project.title}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabProjects
