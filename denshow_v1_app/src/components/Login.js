import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import authConfig from "./auth/authConfig";
import { ConfigProvider, theme, Typography, Form, Input, Button } from "antd";
import { Navigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.configure(authConfig);
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
      console.log("ユーザー認証成功:", userData);
    } catch (error) {
      console.log("ユーザー認証エラー:", error);
      setUser(null);
    }
  };

  const handleLogin = async (values) => {
    setLoading(true);
    setLoginError(null);
    try {
      await Auth.signIn(values.email, values.password);
      console.log("ログイン成功");
    } catch (error) {
      console.log("ログインエラー:", error);
      setLoginError("メールアドレスまたはパスワードが正しくありません。");
    } finally {
      setLoading(false);
      checkUser();
      console.log(user);
    }
  };

  const { Title } = Typography;

  return user ? (
    <Navigate to="/denshow" />
  ) : (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="formContainer">
        <Title level={5}>Login</Title>
        <Form onFinish={handleLogin} requiredMark={false}>
          <div>
            <Form.Item
              label="メールアドレス"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "有効なメールアドレスを入力してください",
                },
              ]}
              wrapperCol={{ span: 7 }}
            >
              <Input />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="password"
              label="パスワード"
              rules={[
                { required: true, message: "パスワードを入力してください" },
              ]}
              wrapperCol={{ span: 5 }}
            >
              <Input.Password />
            </Form.Item>
          </div>
          {loginError && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {loginError}
            </div>
          )}
          <div>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Login
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}

export default Login;
