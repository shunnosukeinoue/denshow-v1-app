import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import VideoItemSmall from "./VideoItemSmall";

function VideoListSmall() {
  const { videos } = useContext(ApiContext);
  const listOfVideos = videos.map((video) => (
    <VideoItemSmall key={video.id} video={video} />
  ));
  return <div className="video-list-small">{listOfVideos}</div>;
}

export default VideoListSmall;
