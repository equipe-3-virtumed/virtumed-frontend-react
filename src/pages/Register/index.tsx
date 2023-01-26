import * as Styled from "./styles";
import {
  LockOutlined,
  UserOutlined,
  SolutionOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";

import Header from "components/Header";
import BackIcon from "components/BackIcon";

const Register = () => {

  return (
    <Styled.Container>
      <Header />
      <Styled.Body>
        <BackIcon />
        
        <Styled.Content>
          <Styled.FormContainer>
            <Styled.Heading>Cadastro</Styled.Heading>

            <Form
              autoComplete="on"
              style={{
                width: "100%",
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
                    padding: "0.6rem",
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
                  autoComplete="username"
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0.6rem",
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
                    padding: "0.6rem",
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
                  autoComplete="new-password"
                  placeholder="Digite uma senha..."
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0.6rem",
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
                  autoComplete="new-password"
                  placeholder="Confirme sua senha..."
                  style={{
                    fontSize: "1.1rem",
                    borderRadius: "15px",
                    padding: "0.6rem",
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
