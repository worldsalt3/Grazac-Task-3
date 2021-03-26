import React from 'react'

const Resetbutton = ({resetTimer}) => {
    return (
      <div>
        <button className='reset' onClick={() => resetTimer()}>
          Reset
        </button>
      </div>
    )
}

export default Resetbutton
