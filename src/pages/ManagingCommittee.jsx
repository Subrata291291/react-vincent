import React from 'react'
import ManagingMembers from "../sections/ManagingMembers";
import CommonBanner from '../components/CommonBanner';

const ManagingCommittee = () => {
  return (
    <div>
      <CommonBanner title="Managing Committee" current="Managing Committee" />
        <ManagingMembers/>
    </div>
  )
}

export default ManagingCommittee;
