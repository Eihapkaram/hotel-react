import { Row } from "react-bootstrap";
import "/src/Styles/CrcileIcon.css";
import { FiEye } from "react-icons/fi";
import { MdOutlineAdsClick } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GoArrowUpLeft } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { SiHomebridge } from "react-icons/si";
import { TbHomeEco } from "react-icons/tb";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiEcology } from "react-icons/gi";
function Icon(props) {
  let s;
  function el(props) {
    if (props.s == "el1") {
      return <FiEye className="iconcr2" size={30} color="#333" />;
    } else if (props.s == "el2") {
      return <MdOutlineAdsClick className="iconcr2" size={30} color="#333" />;
    } else if (props.s == "el3") {
      return <FaHandHoldingHeart className="iconcr2" size={30} color="#333" />;
    } else if (props.s == "el4") {
      return <GoArrowUpLeft className="iconcr" size={30} color="#333" />;
    } else if (props.s == "el5") {
      return <IoIosCall className="iconcr" size={30} color="#333" />;
    } else if (props.s == "el6") {
      return <GiEcology className="iconcr" size={30} color="#333" />;
    } else if (props.s == "el7") {
      return <TbHomeEco className="iconcr" size={30} color="#333" />;
    }
  }
  return (
    <div>
      <div>
        <span classname="crcilecon">{el(props)}</span>
      </div>
    </div>
  );
}
export default Icon;
