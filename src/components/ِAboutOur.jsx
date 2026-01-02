import { Row } from "react-bootstrap";
import { MdHome } from "react-icons/md";
import { PiFlowerTulipLight } from "react-icons/pi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiEcology } from "react-icons/gi";
import "/src/Styles/AboutOur.css";
function AboutOur() {
  return (
    <div>
      <div className="continerOur">
        <strong className="headerOur" data-aos="fade-up" data-aos-delay="7000">
          قيمنا
        </strong>
        <h3 className="discriptionOur">
          <span data-aos="fade-up" data-aos-delay="500">
            نعمل ببراعة لنبني من الخيال سكن
          </span>
        </h3>
        <div className="continerourinner">
          <div className="simalCard" data-aos="fade-up" data-aos-delay="7000">
            <MdHome size={50} color="#333" />;<h2>السكن</h2>
            <p>
              يعد السكن من أهم الأشياء في حياتنا إذ هو المكان الذي نلجأ إليه في
              نهاية اليوم والمكان الذي يضم كل ما نحبه وكل ما نعتز به. وهي
              وظيفتنا في كال أن نجلب الراحة والسعادة لكل من يقطن في المنزل.
            </p>
          </div>
          <div className="simalCard" data-aos="fade-up" data-aos-delay="300">
            <PiFlowerTulipLight size={50} color="#333" />;<h2>البراعة</h2>
            <p>
              نرى الأشياء في كال بشكل مختلف. ونجد طرقًا جديدة لمساعدة عملائنا ،
              ونتميز بأننا الأفخم في المجال العقاري ودائمًا نسعد بأن نقود الطريق
              إلى حيث يتجه العالم في هذا المجال.
            </p>
          </div>
          <div className="simalCard" data-aos="fade-up" data-aos-delay="500">
            <GiEcology size={60} color="#333" />;<h2>الاتقان</h2>
            <p>
              نعتقد في كال إنك إذا كنت ستفعل شيئًا ما يجب أن تكون الأفضل فيه لا
              نقبل بأن نكون في المتوسط بل أن نكون إستثنائيين ومميزين, نتجاوز
              دائمًا المتوقع وننطلق إلى ما بعد ذلك.
            </p>
          </div>
          <div className="simalCard" data-aos="fade-up" data-aos-delay="1000">
            <FaUmbrellaBeach size={50} color="#333" />;<h2>الرفاهية</h2>
            <p>
              5 إن سعادة عملائنا هي سعادتنا فالتفاؤل والفرح هما ما نسعى لنشره
              وتحقيقه وأن نملأ السكن بالجمال لتملؤوه أنتم بالحياة.
            </p>
          </div>
        </div>
        <img className="imgOur" src="/src/assets/wall.png" />
      </div>
    </div>
  );
}
export default AboutOur;
