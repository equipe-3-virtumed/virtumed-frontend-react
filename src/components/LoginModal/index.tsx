import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo.svg";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "contexts/auth";
import api from "services/api";

interface LoginModalProps {
  handleShowLoginModal: () => void;
}
const LoginModal = ({ handleShowLoginModal }: LoginModalProps) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    api.post("/login", { email, password }).then((res) => {
      login({ token: res.data.token, user: res.data.user });
    });
  };

  return (
    <Styled.Container>
      <div>
        <img src={Logo} alt="Logo Virtumed" />

        <div>
          <Form
            autoComplete="on"
            style={{
              width: "80%",
              fontSize: "1rem",
            }}
          >
            <label htmlFor="email">Email</label>
            <Form.Item
              name="email"
              id="email"
              style={{ fontSize: "0" }}
              rules={[
                {
                  required: true,
                  message: "Coloque o seu email correto!",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email de acesso..."
                style={{
                  fontSize: "1.1rem",
                  borderRadius: "15px",
                  height: "40px",
                  backgroundColor: "#F5F8FB",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <label htmlFor="password">Senha</label>
            <Form.Item
              name="password"
              id="password"
              style={{ fontSize: "0" }}
              rules={[
                { required: true, message: "Digite a sua senha correta!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="current-password"
                placeholder="Senha de acesso"
                style={{
                  fontSize: "1.1rem",
                  borderRadius: "15px",
                  height: "40px",
                  backgroundColor: "#F5F8FB",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <a href="#!">Esqueci minha senha!</a>
            </Form.Item>

            <Form.Item
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <button type="submit" onClick={handleLogin}>
                Entrar
              </button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <Link to={"/register"}>Cadastre-se</Link>
        </div>
      </div>
    </Styled.Container>
  );
};

export default LoginModal;
