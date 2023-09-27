import React from "react";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function VideoItemSmall({ video }) {
  const navigate = useNavigate();
  const hundleVideoItem = (video) => {
    navigate(`/video?watch=${video.id}`);
  };

  return (
    <Card
      hoverable
      style={{ width: 240, cursor: "pointer" }}
      cover={<img alt="thumbnail" src={video.thum} height={160} />}
      onClick={() => hundleVideoItem(video)}
    >
      <div>
        <Typography.Title level={5}>{video.title}</Typography.Title>
      </div>
    </Card>
  );
}

export default VideoItemSmall;
