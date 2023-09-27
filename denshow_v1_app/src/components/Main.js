import { Col, Row } from "antd";
import VideoListLarge from "./VideoListLarge";
import VideoListSmall from "./VideoListSmall";
import NavBar from "./NavBar";

function Main() {
  return (
    <div>
      <NavBar />
      <Row>
        <Col span={2}></Col>
        <Col span={16}>
          <VideoListSmall />
        </Col>
        <Col span={6}>
          <VideoListLarge />
        </Col>
      </Row>
    </div>
  );
}

export default Main;
