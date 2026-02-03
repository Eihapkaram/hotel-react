import { Helmet } from "react-helmet-async";
import BannerSction from "../components/AboutSction/BannerSction";
import IntrastedSction from "../components/FixeingOrder/IntrastedSction";
import SctionThere from "../components/AboutSction/SctionThere";
import { useEffect } from "react";

export default function Intersted() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>سجل اهتمامك | شركة العقارات</title>

        <meta
          name="description"
          content="سجل اهتمامك الآن واحجز وحدتك العقارية بسهولة وتواصل معنا لمعرفة أحدث المشاريع والعروض."
        />

        <meta
          name="keywords"
          content="عقارات, تسجيل اهتمام, شقق للبيع, مشاريع عقارية"
        />

        {/* Open Graph */}
        <meta property="og:title" content="سجل اهتمامك | شركة العقارات" />

        <meta
          property="og:description"
          content="تواصل معنا واحجز وحدتك الآن داخل أحدث المشاريع العقارية."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://yourdomain.com/interested" />
      </Helmet>

      <div>
        <BannerSction />
        <IntrastedSction />
        <SctionThere />
      </div>
    </>
  );
}
