import Carousel from "react-bootstrap/Carousel";
import Btn from "./BtnCom";
import "/src/Styles/BannerStyle.css";
import { useEffect, useState } from "react";
import { fetchProjects } from "/src/Redux/Slices/projectsSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function banner() {
  const navigate = useNavigate();
  const dis = useDispatch();
  const { list: projects, loading, baseURL } = useSelector((s) => s.projects);
  useEffect(() => {
    dis(fetchProjects());
  }, [dis]);
  function handleSlide() {
    const activeCaption = document.querySelector(
      ".carousel-item.active .carousel-caption",
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
        {projects.map((el) => {
          return (
            <Carousel.Item key={el.id}>
              <Carousel.Caption className="text1">
                <h4 className="title1">مشروع</h4>
                <h3 className="title2">{el.title}</h3>
                <p className="title3"> {el.location} </p>
                <div className="btndiv">
                  <Btn
                    text="عرض التفاصيل"
                    backcolor="white"
                    color="black"
                    onClick={() => {
                      navigate(`/unite/${el.id}`);
                    }}
                  />
                </div>
              </Carousel.Caption>
              <div>
                <img
                  className="carimg"
                  width={"800px"}
                  src={el.main_image_url}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default banner;
