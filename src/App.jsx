import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import OurVision from "./pages/OurVision";
import ManagingCommittee from "./pages/ManagingCommittee";
import ChairmanMessage from "./pages/ChairmanMessage";
import Infrastructure from "./pages/Infrastructure";
import FacultyMembers from "./pages/FacultyMembers";
import CounsellorSpecialEducator from "./pages/CounsellorSpecialEducator";
import AwardsAchievements from "./pages/AwardsAchievements";
import SchoolHouseSystem from "./pages/SchoolHouseSystem"
import StudentCouncil from "./pages/StudentCouncil";
import AnnualCalendar from "./pages/AnnualCalendar";

import Scholastic from "./pages/Scholastic";
import CoScholastic from "./pages/CoScholastic";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import JobOpportunity from "./pages/JobOpportunity";
import JobDetails from "./sections/JobDetails";

import Noc from "./pages/Noc";
import Affiliation from "./pages/Affiliation";

import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>

      {/*Layout Wrapper */}
      <Route path="/" element={<Layout />}>

        {/* Home */}
        <Route index element={<Home />} />

        {/* OUR SCHOOL */}
        <Route path="our-vision" element={<OurVision />} />
        <Route path="ManagingCommittee" element={<ManagingCommittee />} />
        <Route path="ChairmanMessage" element={<ChairmanMessage />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="FacultyMembers" element={<FacultyMembers />} />
        <Route path="CounsellorSpecialEducator" element={<CounsellorSpecialEducator />} />
        <Route path="AwardsAchievements" element={<AwardsAchievements />} />
        <Route path="SchoolHouseSystem" element={<SchoolHouseSystem />} />
        <Route path="StudentCouncil" element={<StudentCouncil />} />
        <Route path="AnnualCalendar" element={<AnnualCalendar />} />

        {/* SCHOLASTIC */}
        <Route path="scholastic" element={<Scholastic />} />
        <Route path="co-scholastic" element={<CoScholastic />} />
        <Route path="activities" element={<Activities />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="JobOpportunity" element={<JobOpportunity />} />
        <Route path="/job-details/:id" element={<JobDetails />} />

        {/* Mandatrory Dsicloser */}
        <Route path="noc" element={<Noc />} />
        <Route path="Affiliation" element={<Affiliation />} />
        <Route path="activities" element={<Activities />} />
        <Route path="gallery" element={<Gallery />} />

        {/* MAIN */}
        <Route path="admissions" element={<Admissions />} />
        <Route path="contact" element={<Contact />} />

      </Route>

    </Routes>
  );
}

export default App;