import { useState } from "react";
import HeaderModal from "components/HeaderModal";
import { MenuOutlined } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { FiMoon, FiSun } from "react-icons/fi";
// import { Link, useNavigate } from "react-router-dom";
// import { useDesign } from "contexts/themeContext";
import Logo from "../../assets/logo.svg";
import * as Styled from "./styles";

const Header = () => {
  const [showHeaderModal, setShowHeaderModal] = useState<boolean>(false);
  // const { themeDesign, setThemeDesign } = useDesign();
  // const [width, setWidth] = useState<number>(0);

  // const navigate = useNavigate();

  const handleShowHeaderModal = () => {
    setShowHeaderModal(!showHeaderModal);
  };

  // const items: MenuProps["items"] = [
  //   {
  //     label: (
  //       <p>
  //         {themeDesign === "Light" ? (
  //           <span
  //             onClick={() => setThemeDesign("Dark")}
  //             style={{ textAlign: "center" }}
  //           >
  //             <FiMoon />
  //           </span>
  //         ) : (
  //           <span
  //             onClick={() => setThemeDesign("Light")}
  //             style={{ textAlign: "center" }}
  //           >
  //             <FiSun />
  //           </span>
  //         )}
  //       </p>
  //     ),
  //     key: 1,
  //   },
  // ];

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // });

  // console.log(width);

  return (
    <>
      {showHeaderModal && (
        <HeaderModal handleShowHeaderModal={handleShowHeaderModal} />
      )}

      <Styled.Header>
        <Styled.Navbar>
          <Styled.Logo src={Logo} alt="Logo Virtumed" />
          <MenuOutlined
            style={{
              fontSize: "1.8rem",
              color: "#000",
            }}
            onClick={handleShowHeaderModal}
          />

          {/* {width => 560 ? (
          <Styled.Logo src={Logo} alt="Logo Virtumed" onClick={() => navigate("/")} />
        ) : (
          ''
        )} */}
        </Styled.Navbar>
      </Styled.Header>
    </>
  );
};

export default Header;
