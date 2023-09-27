import React from "react";
import { Layout, Input } from "antd";
import { LoginOutlined, AudioOutlined } from "@ant-design/icons";

function NavBar() {
  const { Header } = Layout;
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
      <Header className="navbar">
        <div className="logo">denshowのロゴ</div>
        <div className="search">
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 400,
            }}
            suffix={<AudioOutlined />}
          />
        </div>
        <div className="logout">
          <LoginOutlined />
          ログイン
        </div>
      </Header>
    </div>
  );
}

export default NavBar;
