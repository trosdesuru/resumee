import React from 'react'

function Education({ data }) {
  return (
    <div className="text-textPrimary">
      <h2 className="text-2xl font-semibold mb-4">Educación</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <strong>{item.degree}</strong> en {item.institution} ({item.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education