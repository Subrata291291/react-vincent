import React from 'react'
import MembersFaculty from '../sections/MembersFaculty'
import CommonBanner from "../components/CommonBanner";

const FacultyMembers = () => {
  return (
    <div>
      <CommonBanner title="Faculty Members" current="Faculty Members" />
      <MembersFaculty/>
    </div>
  )
}

export default FacultyMembers
