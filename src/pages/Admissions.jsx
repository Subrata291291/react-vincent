import React from 'react'
import AdmissionForm from '../sections/AdmissionForm';
import CommonBanner from "../components/CommonBanner";

const Admissions = () => {
  return (
    <div>
      <CommonBanner title="Admissions" current="Admissions"/>
      <AdmissionForm />
    </div>
  )
}

export default Admissions
