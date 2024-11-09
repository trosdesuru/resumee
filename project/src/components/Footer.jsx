import React from 'react'

const Footer = () => {
  console.debug('bottom bar -> call')

  return (
    <div className="fixed bottom-0 w-full bg-background border-t border-border hidden sm:flex justify-between z-20">
      <div className="status-item text-white">Ln 1, Col 1</div>
      <div className="status-item text-white">Type: JavaScript</div>
      <div className="status-item text-white">Git: master</div>
    </div>
  )
}

export default Footer
