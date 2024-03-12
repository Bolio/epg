import styled from "styled-components";

export const StyledEventCard = styled.div<{ widthEventPx: number }>`
  width: ${({ widthEventPx }) => `${widthEventPx}px`};
  height: 100px;
  padding: 0.55rem;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // border: solid 1px white;

  border-bottom: solid 1px white; /* Añade un borde inferior */
  border-right: solid 1px white; /* Añade un borde derecho */

  div.channel-number {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    p {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
      font-weight: 600;
      overflow-wrap: break-word;
    }

    div.container-outlinedash {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
    }
  }
`;
