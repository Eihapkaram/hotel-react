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
      </Container>
    </div>
  );
}
export default banner;
