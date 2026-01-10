import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "/src/components/ExampleCarouselImage";
import ExampleCarouselImage2 from "/src/components/ExampleCarouselImage2";
import ExampleCarouselImage3 from "/src/components/ExampleCarouselImage3";
import Btn from "./BtnCom";
import "/src/Styles/BannerStyle.css";

function banner() {
  function handleSlide() {
    const activeCaption = document.querySelector(
      ".carousel-item.active .carousel-caption"
    );
    if (activeCaption) {
      activeCaption.classList.remove("animate");
      void activeCaption.offsetWidth; // 🔥 force reflow لإعادة تشغيل الأنيميشن
      activeCaption.classList.add("animate");
    }
  }

  return (
    <div>
      <Carousel
        fade={true}
        controls={true}
        indicators={false}
        className="vertical-carousel"
        interval={3000}
        onSlide={handleSlide}
        onSlid={handleSlide} // لضمان الأنيميشن بعد الانتقال
      >
        <Carousel.Item>
          <Carousel.Caption className="text1">
            <h4 className="title1">مشروع</h4>
            <h3 className="title2">K-110</h3>
            <p className="title3">الرياض - الزهراء</p>
            <div className="btndiv">
              <Btn text="عرض التفاصيل" backcolor="white" color="black" />
            </div>
          </Carousel.Caption>
          <ExampleCarouselImage text="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption className="text1">
            <h4 className="title1">مشروع</h4>
            <h3 className="title2">K-110</h3>
            <p className="title3">الرياض - الزهراء</p>
            <div className="btndiv">
              <Btn text="عرض التفاصيل" backcolor="white" color="black" />
            </div>
          </Carousel.Caption>
          <ExampleCarouselImage2 text="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption className="text1">
            <h4 className="title1">مشروع</h4>
            <h3 className="title2">K-110</h3>
            <p className="title3">الرياض - الزهراء</p>
            <div className="btndiv">
              <Btn text="عرض التفاصيل" backcolor="white" color="black" />
            </div>
          </Carousel.Caption>
          <ExampleCarouselImage3 text="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default banner;
