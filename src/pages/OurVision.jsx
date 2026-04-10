import React from 'react'
import Vission from "../sections/Vission";
import CommonBanner from '../components/CommonBanner';
import Invest from '../sections/Invest';
import Advisior from "../sections/Advisors";

const OurVision = () => {
  return (
    <div>
      <CommonBanner title="About Us" current="About Us" />
      <Vission/>
      <Invest/>
      <Advisior/>
    </div>
  )
}

export default OurVision
