import { Row } from "react-bootstrap";
import "/src/Styles/SectionComStyle.css";
function Section() {
  return (
    <div>
      <div className="continer">
        <strong className="header" data-aos="fade-up" data-aos-delay="300">
          نعمل ببراعة لنبني من الخيال سكن
        </strong>
        <h3 className="discription">
          <span data-aos="fade-up" data-aos-delay="500">
            كـال هي شركة للتطوير العقاري تعمل على إبتكار منتجات عقارية
          </span>
          <span data-aos="fade-up" data-aos-delay="1000">
            {" "}
            مستدامة تلبي رغبة عملائها
          </span>
        </h3>
        <img className="img" src="/src/assets/wall3.png" />
      </div>
    </div>
  );
}
export default Section;
