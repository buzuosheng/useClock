import React from 'react'
import useClock from '../lib/useClock';

export default function Clock() {
  const time = useClock(new Date())

  const dayObj = {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    0: '星期天'
  }

  return (
    <div className='main'>
      {(dayObj[time.getDay()] || '') + time.toLocaleTimeString()}
    </div>
  )
}