import React from 'react'

function TabSkills({ data }) {
  return (
    <div className="text-textPrimary">
      <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
      <ul>
        {data.map(skill => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default TabSkills