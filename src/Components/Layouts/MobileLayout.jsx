import { styled } from "styled-components";
const Layout = styled.main`
  display: flex;
  position: relative;
  width: 500px;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  background: url("../../assets/MobileMainImg.jpg") no-repeat center center;
`;
const MobileLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default MobileLayout;
