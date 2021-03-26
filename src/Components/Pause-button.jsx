import React from 'react'

const Pausebutton = ({setMinute, counter, setCounter, isActive, setSecond, setIsActive}) => {

    
    return (
      <div>
        <button className='pause' onClick={() => setIsActive(false)}>
          Pause
        </button>
      </div>
    )
}

export default Pausebutton
