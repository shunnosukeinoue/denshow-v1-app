import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import VideoItemLarge from "./VideoItemLarge";

function VideoListLarge() {
  const { videos } = useContext(ApiContext);
  const listOfVideos = videos.map((video) => (
    <VideoItemLarge key={video.id} video={video} />
  ));
  return <div className="video-list-large">{listOfVideos}</div>;
}

export default VideoListLarge;
