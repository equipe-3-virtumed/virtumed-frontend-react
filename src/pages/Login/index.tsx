import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Logo from "../../assets/logo.svg";
import * as Styled from "./styles";
import { useState } from "react";
import { useAuth } from "contexts/authContext";
import { useDesign } from "contexts/themeContext";

const Login = () => {
  const { themeDesign, setThemeDesign } = useDesign();

  const handleToggleTheme = () => {
    setThemeDesign(themeDesign === 'Light' ? 'Dark' : 'Light')
  }

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => { login({ email, password }) }

  return (
    <Styled.Container>
      <Styled.Body>
        <Styled.Content>
          <Styled.ToggleIcon onClick={handleToggleTheme}>
            {themeDesign === "Light" ? <FaMoon /> : <FiSun />}
          </Styled.ToggleIcon>

          <Styled.Img src={Logo} alt="Logo Virtumed" />

          <Styled.FormContainer>
            <Form
              autoComplete="on"
              style={{
                width: "80%",
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
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0 .6rem",
                    height: "40px",
                    backgroundColor: "#F5F8FB",
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
                  type="current-password"
                  placeholder="Senha de acesso"
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0 .6rem",
                    height: "40px",
                    backgroundColor: "#F5F8FB",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <Styled.Link href="#!">Esqueci minha senha!</Styled.Link>
              </Form.Item>

              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Styled.Button type="submit" onClick={handleLogin}>Entrar</Styled.Button>
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
