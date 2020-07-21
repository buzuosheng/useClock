import { useState, useEffect } from 'react'

const useClock = (initTime) => {
  const [time, setTime] = useState(initTime)

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export default useClock