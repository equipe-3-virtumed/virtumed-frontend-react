import * as Styled from "./styles";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const BackIcon = () => {

  const navigate = useNavigate();

  return (
    <Styled.BackIcon onClick={() => navigate("/")}>
      <LeftOutlined />
    </Styled.BackIcon>
  )
}

export default BackIcon;