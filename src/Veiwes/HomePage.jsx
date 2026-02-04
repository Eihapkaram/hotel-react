import React from "react";
import { useParams } from "react-router-dom";

import Products from "/src/Veiwes/Products";
import { getProduct } from "/src/Redux/Slices/ProductSlice";
import { addCart } from "/src/Redux/Slices/CartSlice";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, lazy, Suspense } from "react";

const BannerCom = lazy(() => import("/src/components/BannerCom"));
const AboutOur = lazy(() => import("../components/ِAboutOur"));
const SectionCare = lazy(() => import("/src/components/SctionCare"));
const Section = lazy(() => import("/src/components/SectionCom"));
const Projects = lazy(() => import("/src/components/ProjectsCom"));
const Footer = lazy(() => import("../components/FooterCom"));

function Home() {
  const { id } = useParams();
  const usedis = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    usedis(getProduct());
  }, [usedis]);

  return (
    <>
      <div>
        <Suspense fallback={<div className="loader">loading...</div>}>
          <BannerCom />
        </Suspense>

        <Suspense fallback={<div className="loader">loading...</div>}>
          <Section />
        </Suspense>

        <Suspense fallback={<div className="loader">loading...</div>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div className="loader">loading...</div>}>
          <AboutOur />
        </Suspense>

        <Suspense fallback={<div className="loader">loading...</div>}>
          <SectionCare />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
