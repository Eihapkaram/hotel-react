import "/src/Styles/BtnComStyle.css";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GoArrowUpLeft } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
function Btn(props) {
  function el(props) {
    if (props.s == "el1") {
      return <GoArrowUpLeft size={30} color="#333" />;
    } else if (props.s == "el2") {
      return <IoIosCall size={30} color="#333" />;
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
     type={props.type}
      onClick={props.onClick}
        style={{
          backgroundColor: props.backcolor,
          color: props.color,
          display: "flex",
          border: props.bord,
        }}
        className="btnanimet"
      >
        {el(props)} {props.text}
      </button>
    </div>
  );
}
export default Btn;
