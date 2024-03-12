import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const StyledH1 = styled.h1`
  margin: 0;
`;

const MainTitle = ({ children }: IProps) => <StyledH1>{children}</StyledH1>;

export default MainTitle;
