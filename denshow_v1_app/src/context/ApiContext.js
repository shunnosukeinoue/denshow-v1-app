import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

function ApiContextProvider(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/videos/");
        setVideos(res.data);
      } catch {
        console.log("Videoの取得に失敗しました");
      }
    };
    getVideos();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        videos,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
