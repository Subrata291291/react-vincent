import React from 'react'
import JobBox from '../sections/JobBox';
import CommonBanner from "../components/CommonBanner";

const JobOpportunity = () => {
  return (
    <div>
      <CommonBanner title="Job Opportunity" current="Job Opportunity" />
      <JobBox/>
    </div>
  )
}

export default JobOpportunity
