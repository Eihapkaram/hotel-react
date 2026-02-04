import BannerSction from "../components/AboutSction/BannerSction";
import SctionOne from "../components/AboutSction/SctionOne";
import Sctiontow from "../components/AboutSction/SctionTow";
import SectionThere from "../components/AboutSction/SctionThere";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <BannerSction />
        <SctionOne />
        <Sctiontow />
        <SectionThere />
      </div>
    </>
  );
}

export default AboutUs;
