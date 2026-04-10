import React from 'react'
import InfrastructureModel from '../sections/InfrastructureModel'
import CommonBanner from "../components/CommonBanner";

const Infrastructure = () => {
  return (
    <div>
      <CommonBanner title="Infrastructure" current="Infrastructure" />
        <InfrastructureModel/>
    </div>
  )
}

export default Infrastructure
