import React, { useEffect, useState } from "react";
import HomeModal from "components/HomeModal";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useDesign } from "hooks/useDesign";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import * as Styled from "./styles";

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const navigate = useNavigate()

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const { themeDesign, setThemeDesign } = useDesign();

  const [width, setWidth] = useState<number>(0)

  const items: MenuProps["items"] = [
    {
      label: <Link to={"/patient/profile"}>Perfil</Link>,
      key: 0,
    },
    {
      label: (
        <p>
          {themeDesign === "Light" ? (
            <span
              onClick={() => setThemeDesign("Dark")}
              style={{ textAlign: "center" }}
            >
              <FiMoon />
            </span>
          ) : (
            <span
              onClick={() => setThemeDesign("Light")}
              style={{ textAlign: "center" }}
            >
              <FiSun />
            </span>
          )}
        </p>
      ),
      key: 1,
    },
    {
      label: <p onClick={() => navigate(-1)}>Voltar</p>,
      key: 2,
    },
  ];

  useEffect(() => {
    setWidth(window.innerWidth)
  })

  console.log(width)

  return (
    <Styled.Header>
      <Styled.Navbar>
        <Styled.Logo src={Logo} alt="Logo Virtumed" />
        <MenuOutlined
          style={{
            fontSize: "2rem",
            color: "#000",
          }}
          onClick={handleShowModal}
        />

        {/* {width => 560 ? (
          <Styled.Logo src={Logo} alt="Logo Virtumed" onClick={() => navigate("/")} />
        ) : (
          ''
        )} */}

      </Styled.Navbar>
      {showModal && <HomeModal handleShowModal={handleShowModal}/>}
    </Styled.Header>
  );
};

export default Header;
