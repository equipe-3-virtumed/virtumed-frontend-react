import React from "react";
import * as Styled from "./styles";
import Logo from "../../assets/logo.svg";
import {
  LockOutlined,
  UserOutlined,
  SolutionOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDesign } from "../../hooks/useDesign";

const Register = () => {
  const navigate = useNavigate();

  const { themeDesign, setThemeDesign } = useDesign();

  const handleToggleTheme = () => {
    setThemeDesign(themeDesign === "Light" ? "Dark" : "Light");
  };

  return (
    <Styled.Container>
      <Styled.Body>
        <Styled.BackIcon onClick={() => navigate(-1)}>
          <LeftOutlined />
        </Styled.BackIcon>

        <Styled.Content>
          <Styled.ToggleIcon onClick={handleToggleTheme}>
            {themeDesign === "Light" ? <FaMoon /> : <FiSun />}
          </Styled.ToggleIcon>

          <Styled.Img src={Logo} alt="Logo Virtumed" />

          <Styled.FormContainer>
            <Styled.Heading>Cadastro</Styled.Heading>

            <Form
              autoComplete="on"
              style={{
                width: "80%",
                fontSize: "1rem",
              }}
            >
              <Styled.Label htmlFor="name">Nome</Styled.Label>
              <Form.Item
                name="name"
                id="name"
                style={{ fontSize: "0" }}
                rules={[
                  {
                    required: true,
                    message: "Coloque um nome...",
                    len: 3,
                    type: "string",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Coloque o seu nome..."
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0 .6rem",
                    height: "40px",
                    backgroundColor: "#F5F8FB",
                  }}
                />
              </Form.Item>

              <Styled.Label htmlFor="email">Email</Styled.Label>
              <Form.Item
                name="email"
                id="email"
                style={{ fontSize: "0" }}
                rules={[
                  {
                    required: true,
                    message: "Coloque o seu email...",
                    type: "email",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Coloque o email..."
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0 .6rem",
                    height: "40px",
                    backgroundColor: "#F5F8FB",
                  }}
                />
              </Form.Item>

              <Styled.Label htmlFor="cpf">CPF</Styled.Label>
              <Form.Item
                name="cpf"
                id="cpf"
                style={{ fontSize: "0" }}
                rules={[
                  {
                    required: true,
                    message: "Insira o seu CPF!...",
                    type: "string",
                  },
                ]}
              >
                <Input
                  prefix={<SolutionOutlined className="site-form-item-icon" />}
                  placeholder="Coloque o seu CPF..."
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0 .6rem",
                    height: "40px",
                    backgroundColor: "#F5F8FB",
                  }}
                />
              </Form.Item>

              <Styled.Label htmlFor="password">Senha</Styled.Label>
              <Form.Item
                name="password"
                id="password"
                style={{ fontSize: "0" }}
                rules={[
                  {
                    required: true,
                    message: "Coloque uma senha conforme os caracteres...",
                    min: 7,
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Digite uma senha..."
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0 .6rem",
                    height: "40px",
                    backgroundColor: "#F5F8FB",
                  }}
                />
              </Form.Item>

              <Styled.Label htmlFor="confirmedPassword">
                Confirmar senha
              </Styled.Label>
              <Form.Item
                name="confirmedPassword"
                id="confirmedPassword"
                style={{ fontSize: "0" }}
                rules={[
                  {
                    required: true,
                    message: "Ambas as senhas devem ser iguais...",
                    min: 7,
                  },
                ]}
              >
                <Input.Password
                  prefix={
                    <SafetyCertificateOutlined className="site-form-item-icon" />
                  }
                  type="password"
                  placeholder="Confirme sua senha..."
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0 .6rem",
                    height: "40px",
                    backgroundColor: "#F5F8FB",
                  }}
                />
              </Form.Item>

              <Form.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Styled.Button type="submit">Cadastrar</Styled.Button>
              </Form.Item>
            </Form>
          </Styled.FormContainer>
        </Styled.Content>
      </Styled.Body>
    </Styled.Container>
  );
};

export default Register;
