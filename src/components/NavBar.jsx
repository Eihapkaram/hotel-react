import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleAside, closeAside } from "/src/Redux/Slices/asideSlice";
import "/src/Styles/Aside.css";

function Aside() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.aside.open);

  const links = [
    { title: "الرئيسية", url: "/" },
    { title: "من نحن", url: "/aboutus" },
    { title: "المشاريع", url: "/projects" },
    { title: "طلبات الصيانة", url: "/orders" },
    { title: "سجل اهتمامك", url: "/intersted" },
  ];

  return (
    <>
      {/* زرار فتح/غلق Aside */}
      <button className="aside-toggle" onClick={() => dispatch(toggleAside())}>
        {open ? "✖" : "☰"}
      </button>

      {/* Aside */}
      <aside className={`aside ${open ? "open" : ""}`}>
        <div className="aside-logo">
          <img src="/src/assets/KAAL.svg" alt="logo" />
        </div>

        <nav className="aside-nav">
          {links.map((el) => (
            <Link
              key={el.title}
              to={el.url}
              className="aside-link"
              onClick={() => dispatch(closeAside())}
            >
              {el.title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Aside;
