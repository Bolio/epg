import { MouseEventHandler } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  handleClick: MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: string;
}

const StyledButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Button = ({ children, handleClick, backgroundColor }: IProps) => {
  return (
    <StyledButton onClick={handleClick} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};
export default Button;
