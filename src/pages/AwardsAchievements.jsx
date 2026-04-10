import React from 'react'
import Awards from "../sections/Awards";
import CommonBanner from "../components/CommonBanner";

const AwardsAchievements = () => {
  return (
    <div>
      <CommonBanner title="Awards & Achievements" current="Awards & Achievements" />
      <Awards/>
    </div>
  )
}

export default AwardsAchievements
