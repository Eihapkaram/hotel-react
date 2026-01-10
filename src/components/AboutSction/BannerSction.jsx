import { Container } from "react-bootstrap";
import myimg from "/src/assets/KAAL.svg";
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
          <img style={{ position: "relative" }} src={myimg} />
        </banner>
      </Container>
    </div>
  );
}
export default banner;
