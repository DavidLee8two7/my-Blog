import styled from "styled-components";

const ProjectDiv = styled.div`
  z-index: 2;
  grid-row: 5;
  grid-column: 1 / span 4;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 2px;
  background-color: ${props => props.theme.offWhite};
`;

const ProjectTitle = styled.div`
  z-index: 3;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 3;
  text-align: center;
`;

const Project = styled.div`
  z-index: 2;
  width: 100%;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr;
  transition: all 0.4s;
  .project {
    width: 100%;
    transition: all 0.4s;
    &:hover {
      transform: scale(0.9);
    }
  }
  .shade {
    min-height: 10rem;
    font-size: 1.6rem;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.4s;
    border: 1px solid #f7df1e;
    &:hover {
      color: green;
      border: 1px solid green;
      font-weight: 400;
    }
  }
  &:hover .project:not(:hover) {
    transform: scale(0.9);
  }
  &:hover .shade:not(:hover) {
    color: green;
    border: 1px solid green;
    font-weight: 400;
  }
`;

export { ProjectDiv, ProjectTitle, Project };
