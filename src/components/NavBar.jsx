import { Link } from "react-router-dom";
import { useState } from "react";
import "/src/AppNav.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const useSt = useSelector((state) => state.Cart);
  const links = [
    { title: "الرئيسية", url: "/" },
    { title: " من نحن", url: "/aboutus" },
    { title: "المشاريع", url: "/projects" },
    { title: "ماذا نقدم ؟", url: "/" },
    { title: "طلبات الصيانة", url: "/" },
    { title: "سجل اهتمامك", url: "/" },
    { title: "تواصل معنا", url: "/" },
  ];
  const [count, setCount] = useState(0);
  function cow() {
    setCount((count) => count + 1);
  }
  return (
    <Navbar
      style={{
        direction: "rtl",
        backgroundColor: "white",
        height: "100px",
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignContent: "center",
      }}
      fixed="top"
      expand="lg"
      className=""
    >
      <Container
        style={{
          direction: "rtl",
          backgroundColor: "white",
          height: "100px",
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Navbar.Brand href="/">
          <img width={"200px"} src="/src/assets/KAAL.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((el) => (
              <Link className="navbar-brand" to={el.url}>
                {el.title}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
