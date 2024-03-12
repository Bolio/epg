import styled from "styled-components";

export const StyledChannelCard = styled.div`
  width: 100%;
  height: 100px;
  padding: 0.55rem;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  border-right: solid 6px black;

  div.channel-number {
    p {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
    }
  }

  div.image-container {
    width: 150px;

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    div.channel-number {
      p {
        font-size: 2rem;
      }
    }
  }
`;
