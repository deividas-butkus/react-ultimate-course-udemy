import styled from "styled-components";

const StyledHeader = styled.header`
  height: 60px;
  background-color: aliceblue;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src="#" alt="logo" />
      <span>Counter Name</span>
    </StyledHeader>
  );
};

export default Header;
