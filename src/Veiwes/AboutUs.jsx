import { Helmet } from "react-helmet-async";
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
      {/* ✅ SEO */}
      <Helmet>
        <title>من نحن | Kaal </title>
        <meta
          name="description"
          content="تعرّف على شركتنا، خبرتنا في المشاريع العقارية، ورؤيتنا لتقديم أفضل الوحدات السكنية والتجارية."
        />
        <meta
          name="keywords"
          content="شركة عقارية, مشاريع سكنية, مشاريع تجارية, عن الشركة"
        />

        {/* Open Graph */}
        <meta property="og:title" content="من نحن | شركتنا العقارية" />
        <meta
          property="og:description"
          content="اكتشف خبرة شركتنا في تطوير المشاريع العقارية المميزة."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about-us" />
        <meta property="og:image" content="/logo.png" />
      </Helmet>

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
