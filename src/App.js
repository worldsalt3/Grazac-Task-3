import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [second, setSecond] = useState('00')
  const [minute, setMinute] = useState('00')
  const [isActive, setIsActive] = useState(false)
  const [counter, setCounter] = useState(0)

  return (
    <div className='App'>
      <div className='time'>
        <span className='minute'>{minute}</span> <span>:</span>{' '}
        <span className='seconds'>{second}</span>
      </div>
      <div className='button'></div>
    </div>
  )
}

export default App;
