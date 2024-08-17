import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.$bcgColor};
  padding: ${(props) => props.$paddingY || props.$padding}px
    ${(props) => props.$paddingX || props.$padding}px;
  margin: ${(props) => props.$margin}px;
  border: none;
  border-radius: ${(props) => props.$borderRadius}px;
  color: ${(props) => props.$color};
  cursor: pointer;
`;

const Button = ({
  btnText,
  bcgColor = "grey",
  padding = 10,
  paddingY,
  paddingX,
  margin = 10,
  borderRadius = 5,
  color = "#fff",
  onClick,
}) => {
  const calculatedPaddingY = paddingY !== undefined ? paddingY : padding;
  const calculatedPaddingX = paddingX !== undefined ? paddingX : padding * 2;
  return (
    <StyledButton
      $bcgColor={bcgColor}
      $padding={padding}
      $paddingY={calculatedPaddingY}
      $paddingX={calculatedPaddingX}
      $margin={margin}
      $borderRadius={borderRadius}
      $color={color}
      onClick={onClick}
    >
      {btnText}
    </StyledButton>
  );
};

export default Button;
