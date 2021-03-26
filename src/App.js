import React, {useState, useEffect} from 'react';
import Pausebutton from '../src/Components/Pause-button'
import Resumebutton from '../src/Components/Resume-button'
import Resetbutton from '../src/Components/Reset-button'
import './App.css';

function App() {

  const [second, setSecond] = useState('00')
  const [minute, setMinute] = useState('05')
  const [isActive, setIsActive] = useState(true)
  const [counter, setCounter] = useState(300)

  const resetTimer = () => {
    setIsActive(false)
    setCounter(300)
    setSecond('00')
    setMinute('05')
    setIsActive(true)
  }


  useEffect(() => {
    let intervalId

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60
        const minuteCounter = Math.floor(counter / 60)

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter

        setSecond(computedSecond)
        setMinute(computedMinute)

        setCounter((counter) => counter - 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [isActive, counter])


  return (
    <div className='App'>
      <div className='time'>
        <span className='minute'>{minute}</span> <span>:</span>{' '}
        <span className='seconds'>{second}</span>
      </div>
      <div className='button'>
        <Pausebutton setIsActive={setIsActive}/>
        <Resumebutton setIsActive={setIsActive}/>
        <Resetbutton resetTimer={resetTimer} />
      </div>
    </div>
  )
}

export default App;
