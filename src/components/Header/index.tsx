import { useState } from "react";
import HeaderModal from "components/HeaderModal";
import { MenuOutlined } from "@ant-design/icons";
import LightLogo from "../../assets/light-logo.svg";
import DarkLogo from "../../assets/logo.svg";

import * as Styled from "./styles";
import { useDesign } from "../../contexts/ThemeContext";

const Header = () => {

  const { lightTheme } = useDesign();

  const [showHeaderModal, setShowHeaderModal] = useState<boolean>(false);

  const handleShowHeaderModal = () => {
    setShowHeaderModal(!showHeaderModal);
  };

  return (
    <>
      {showHeaderModal && (
        <HeaderModal handleShowHeaderModal={handleShowHeaderModal} />
      )}

      <Styled.Header>
        <Styled.Navbar>
          <Styled.Logo src={
            lightTheme ? DarkLogo : LightLogo
        } alt="Logo Virtumed" />
          <MenuOutlined
            style={{
              fontSize: "1.8rem",
              color: "#000",
            }}
            onClick={handleShowHeaderModal}
          />
        </Styled.Navbar>
      </Styled.Header>
    </>
  );
};

export default Header;
