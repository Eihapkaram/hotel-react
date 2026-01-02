import "/src/Styles/BtnComStyle.css";
function Btn(props) {
  return (
    <div>
      <button
        style={{ backgroundColor: props.backcolor, color: props.color }}
        className="btnanimet"
      >
        {" "}
        {props.text}
      </button>
    </div>
  );
}
export default Btn;
