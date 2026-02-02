import BannerSction from "../components/AboutSction/BannerSction";
import SctionSin from "../components/FixeingOrder/SctionSin";
import SctionThere from "../components/AboutSction/SctionThere";
import { useState, useEffect } from "react";
export default function Orders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BannerSction />
      <SctionSin />
      <SctionThere />
    </div>
  );
}
