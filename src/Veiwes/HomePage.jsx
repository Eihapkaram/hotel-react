import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
      {/* ✅ SEO */}
      <Helmet>
        <title>الرئيسية | موقع Kaal</title>

        <meta
          name="description"
          content="اكتشف أفضل المشاريع العقارية والوحدات السكنية والاستثمارية بأفضل الأسعار."
        />

        <meta
          name="keywords"
          content="عقارات, شقق للبيع, استثمار عقاري, مشاريع سكنية"
        />

        {/* Open Graph (مهم للسوشيال) */}
        <meta property="og:title" content="موقع العقارات" />
        <meta
          property="og:description"
          content="أفضل المشاريع العقارية والوحدات السكنية"
        />
        <meta property="og:type" content="website" />
      </Helmet>

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
