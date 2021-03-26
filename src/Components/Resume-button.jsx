import React from 'react'

const Resumebutton = ({setIsActive}) => {
    return (
      <div>
        <button className='resume' onClick={() => setIsActive(true)}>
          Resume
        </button>
      </div>
    )
}

export default Resumebutton
