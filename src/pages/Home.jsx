import Loader from "../components/Loader";

import Banner from "../sections/Banner";
import StudentActivities from "../sections/StudentActivities";
import About from "../sections/About";
import Programs from "../sections/Programs";
import Awards from "../sections/Awards";
import Advisors from "../sections/Advisors";
import GalleryBox from "../sections/GalleryBox";
import Events from "../sections/Events";

function Home() {
  return (
    <>
      {/* <Loader /> */}
      <Banner />
      <StudentActivities />
      <About />
      <Programs />
      <Awards />
      <Advisors />
      <GalleryBox />
      <Events />
    </>
  );
}

export default Home;