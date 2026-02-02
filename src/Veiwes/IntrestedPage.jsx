import BannerSction from "../components/AboutSction/BannerSction";
import IntrastedSction from "../components/FixeingOrder/IntrastedSction";
import SctionThere from "../components/AboutSction/SctionThere";
import { useState, useEffect } from "react";

export default function Intersted() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BannerSction />
      <IntrastedSction />
      <SctionThere />
    </div>
  );
}
