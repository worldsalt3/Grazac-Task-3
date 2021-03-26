import React, {useState, useEffect} from 'react';
import Pausebutton from '../src/Components/Pause-button'
import './App.css';

function App() {

  const [second, setSecond] = useState('00')
  const [minute, setMinute] = useState('00')
  const [isActive, setIsActive] = useState(true)
  const [counter, setCounter] = useState(0)

  return (
    <div className='App'>
      <div className='time'>
        <span className='minute'>{minute}</span> <span>:</span>{' '}
        <span className='seconds'>{second}</span>
      </div>
      <div className='button'>
        <Pausebutton counter={counter} setCounter={setCounter} setMinute={setMinute} setSecond={setSecond} isActive={isActive} setIsActive={setIsActive}/>
      </div>
    </div>
  )
}

export default App;
