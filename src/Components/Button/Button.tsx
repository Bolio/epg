import { MouseEventHandler } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  handleClick: MouseEventHandler<HTMLButtonElement>;
  backgroundcolor?: string;
}

const StyledButton = styled.button<{ backgroundcolor?: string }>`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Button = ({ children, handleClick, backgroundcolor }: IProps) => {
  return (
    <StyledButton onClick={handleClick} backgroundcolor={backgroundcolor}>
      {children}
    </StyledButton>
  );
};
export default Button;
