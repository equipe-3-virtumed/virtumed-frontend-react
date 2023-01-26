import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import * as Styled from "./styles";
import { useState } from "react";
import { useAuth } from "contexts/authContext";
import Header from "components/Header";
import BackIcon from "components/BackIcon";

const Login = () => {

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ email, password });
  };

  return (
    <Styled.Container>
      <Header />
      <Styled.Body>
        <BackIcon />
        <Styled.Content>
          <Styled.FormContainer>
            <Form
              autoComplete="on"
              style={{
                width: "100%",
                fontSize: "1rem",
              }}
            >
              <Styled.Label htmlFor="email">Email</Styled.Label>
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
                  autoComplete="username"
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0.6rem",
                    height: "40px",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Styled.Label htmlFor="password">Senha</Styled.Label>
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
                  type="password"
                  autoComplete="current-password"
                  placeholder="Senha de acesso"
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0.6rem",
                    height: "40px",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              
              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Styled.Link href="#!">Esqueci minha senha!</Styled.Link>
              </Form.Item>

              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Styled.Button type="submit" onClick={handleLogin}>
                  Entrar
                </Styled.Button>
              </Form.Item>
            </Form>
          </Styled.FormContainer>

          <Styled.Register>
            <Link to={"/register"}>Cadastre-se</Link>
          </Styled.Register>
        </Styled.Content>
      </Styled.Body>
    </Styled.Container>
  );
};

export default Login;
