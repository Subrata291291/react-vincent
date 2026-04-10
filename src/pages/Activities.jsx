import React from 'react'
import StudentActivities from "../sections/StudentActivities";
import CommonBanner from '../components/CommonBanner';

const Activities = () => {
  return (
    <div>
      <CommonBanner title="Activities" current="Activities" />
      <StudentActivities/>
    </div>
  )
}

export default Activities
