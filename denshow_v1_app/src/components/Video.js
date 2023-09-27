import React, { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import ReactPlayer from "react-player";
import { Typography } from "antd";

function Video() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("watch");
  const { videos } = useContext(ApiContext);
  const video = videos.find((video) => video.id === id);

  const player = useRef(null);

  if (!video) {
    return <p>指定されたビデオが見つかりません。</p>;
  }

  return (
    <>
      <div className="wrapper">
        <ReactPlayer
          className="player"
          url={video.video}
          ref={player}
          width="100%"
          height="100%"
          playing
          controls
          disablePictureInPicture
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
                disablePictureInPicture: true,
              },
            },
          }}
        />
      </div>
      <Typography.Title level={4}>{video.title}</Typography.Title>
    </>
  );
}

export default Video;
