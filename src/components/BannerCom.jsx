import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "/src/components/ExampleCarouselImage";
import ExampleCarouselImage2 from "/src/components/ExampleCarouselImage2";
import ExampleCarouselImage3 from "/src/components/ExampleCarouselImage3";
import Btn from "./BtnCom";
import "/src/Styles/BannerStyle.css";

function banner() {
  return (
    <div>
      <Carousel
        fade={true}
        controls={true}
        indicators={false}
        className="vertical-carousel"
        interval={3000}
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
