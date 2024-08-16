import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 60px;
  background-color: beige;
  padding: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Counter Name, Inc, <br />
      &copy; {new Date().getFullYear()}
    </StyledFooter>
  );
};

export default Footer;
