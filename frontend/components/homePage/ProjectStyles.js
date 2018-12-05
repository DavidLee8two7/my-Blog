import styled from "styled-components";

const ProjectDiv = styled.div`
  grid-row: 5;
  grid-column: 1 / -1;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  background: ${props => props.theme.offWhite};
`;

const ProjectTitle = styled.div`
  z-index: 3;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / -1;
  text-align: center;
`;

export { ProjectDiv, ProjectTitle };
