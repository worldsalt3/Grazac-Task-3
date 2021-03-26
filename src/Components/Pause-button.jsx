import React, {useEffect} from 'react'

const Pausebutton = ({setMinute, counter, setCounter, isActive, setSecond, setIsActive}) => {

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

          setCounter((counter) => counter + 1)
        }, 1000)
      }

      return () => clearInterval(intervalId)
    }, [isActive, counter])
    return (
      <div>
        <button className='pause' onClick={() => setIsActive(false)}>
          Pause
        </button>
      </div>
    )
}

export default Pausebutton
