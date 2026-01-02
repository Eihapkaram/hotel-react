import { Container } from "react-bootstrap";

function banner() {
  return (
    <div>
      <Container
        fluid
        style={{
          paddingBlock: "100px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <banner
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ position: "relative" }} src="/src/assets/KAAL.svg" />
        </banner>
        <h3
          style={{
            position: "relative",
            direction: "ltr",
            fontSize: "30px",
            marginTop: "20px",
          }}
        >
          عن الشركة{" "}
        </h3>
      </Container>
    </div>
  );
}
export default banner;
