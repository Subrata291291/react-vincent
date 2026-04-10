import React from 'react'
import MessageChairman from '../sections/MessageChairman'
import CommonBanner from '../components/CommonBanner'

const ChairmanMessage = () => {
  return (
    <div>
      <CommonBanner title="Chairman's Message" current="Chairman's Message" />
      <MessageChairman/>
    </div>
  )
}

export default ChairmanMessage
