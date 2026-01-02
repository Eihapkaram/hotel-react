import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "/src/components/ExampleCarouselImage";
import ExampleCarouselImage2 from "/src/components/ExampleCarouselImage2";
import ExampleCarouselImage3 from "/src/components/ExampleCarouselImage3";
import Btn from "./BtnCom";
import "/src/BannerStyle.css";
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
          <h3 className="title">First slide label</h3>
          <Carousel.Caption className="text1">
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Btn text="عرض التفاصيل" backcolor="white" color="black" />
          </Carousel.Caption>
          <ExampleCarouselImage text="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <h3 className="title">First slide label</h3>
          <Carousel.Caption className="text1">
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Btn text="عرض التفاصيل" backcolor="white" color="black" />
          </Carousel.Caption>
          <ExampleCarouselImage2 text="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <h3 className="title">First slide label</h3>
          <Carousel.Caption className="text1">
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Btn text="عرض التفاصيل" backcolor="white" color="black" />
          </Carousel.Caption>
          <ExampleCarouselImage3 text="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default banner;
