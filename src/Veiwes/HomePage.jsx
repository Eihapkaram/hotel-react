import React from "react";
import { useParams } from "react-router-dom";
import Products from "/src/Veiwes/Products";
import { getProduct, add } from "/src/Redux/Slices/ProductSlice";
import { addCart } from "/src/Redux/Slices/CartSlice";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect, lazy, Suspense } from "react";
const BannerCom = lazy(() => import("/src/components/BannerCom"));
const AboutOur = lazy(() => import("../components/ِAboutOur"));
const SectionCare = lazy(() => import("/src/components/SctionCare"));
const Section = lazy(() => import("/src/components/SectionCom"));
const Projects = lazy(() => import("/src/components/ProjectsCom"));
const Footer = lazy(() => import("../components/FooterCom"));

function Home() {
  const { id } = useParams();
  const [name, setName] = useState("eihap");
  const usedis = useDispatch();
  const product = useSelector((state) => state.pro.items);
  const [last, setLast] = useState("karam");
  useEffect(() => {
    usedis(getProduct());
  }, []);

  return (
    <div>
      <Suspense fallback={<div className="loader">looding...</div>}>
        <BannerCom />
      </Suspense>
      <Suspense fallback={<div className="loader">looding...</div>}>
        {" "}
        <Section />
      </Suspense>
      <Suspense fallback={<div className="loader">looding...</div>}>
        {" "}
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="loader">looding...</div>}>
        <AboutOur />
      </Suspense>
      <Suspense fallback={<div className="loader">looding...</div>}>
        <SectionCare />
      </Suspense>
    </div>
  );
}

export default Home;
