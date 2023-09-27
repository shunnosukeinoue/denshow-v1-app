import React from "react";
import "./App.css";
import { ConfigProvider, theme } from "antd";
import ApiContextProvider from "./context/ApiContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "./components/Login";
import Main from "./components/Main";
import Video from "./components/Video";

function App() {
  return (
    <ApiContextProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/denshow" element={<Main />} />
              <Route path="/video" element={<Video />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </ConfigProvider>
    </ApiContextProvider>
  );
}

export default App;
