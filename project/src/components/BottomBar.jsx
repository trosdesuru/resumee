import React from 'react'

const BottomBar = () => {
  console.debug('bottom bar -> call')

  return (
    <div className="fixed bottom-0 w-full bg-background p-2 border-t border-border flex justify-between z-20">
      <div className="status-item text-white">Ln 1, Col 1</div>
      <div className="status-item text-white">Type: JavaScript</div>
      <div className="status-item text-white">Git: master</div>
    </div>
  )
}

export default BottomBar
