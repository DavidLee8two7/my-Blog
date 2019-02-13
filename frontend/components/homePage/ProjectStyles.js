import styled from "styled-components";

const ProjectDiv = styled.div`
  grid-row: 6;
  grid-column: 1 / -1;
  z-index: 2;
  width: 99%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 869px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (max-width: 500px) {
    box-shadow: none;
    background: transparent;
  }
`;

export default ProjectDiv;
