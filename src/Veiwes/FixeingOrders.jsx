import { Helmet } from "react-helmet-async";
import BannerSction from "../components/AboutSction/BannerSction";
import SctionSin from "../components/FixeingOrder/SctionSin";
import SctionThere from "../components/AboutSction/SctionThere";
import { useEffect } from "react";

export default function Orders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>حجز وحدة عقارية | شركة Kaal</title>

        <meta
          name="description"
          content="قم بحجز وحدتك العقارية الآن بسهولة داخل أحدث المشاريع السكنية والتجارية."
        />

        <meta
          name="keywords"
          content="حجز شقة, حجز عقار, شراء عقارات, مشاريع سكنية"
        />

        {/* Open Graph */}
        <meta property="og:title" content="حجز وحدة عقارية | شركة Kaal" />

        <meta
          property="og:description"
          content="احجز وحدتك داخل أفضل المشاريع العقارية بسهولة وسرعة."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://yourdomain.com/orders" />

        <meta property="og:image" content="/logo.png" />
      </Helmet>

      <div>
        <BannerSction />
        <SctionSin />
        <SctionThere />
      </div>
    </>
  );
}
