import styled from "styled-components";

const ProjectDiv = styled.div`
  grid-row: 5;
  grid-column: 1 / -1;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  background: ${props => props.theme.white};
`;

const ProjectTitle = styled.div`
  width: 100%;
  grid-row: 1;
  grid-column: 1 / -1;
  text-align: center;
`;

const InfoDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  background: ${props => props.theme.white};
  box-shadow: 0 0 1.5rem rgba(126, 126, 126, 0.75);
  text-align: left;
  border-radius: 3px;
  h4 {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.theme.black};
    width: 100%;
  }
  span {
    border-radius: 3px;
    padding: 1rem 1.5rem;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to right bottom,
      rgba(0, 216, 255, 0.85),
      rgba(255, 165, 0, 0.85)
    );
  }
  p {
    padding: 3rem;
    font-size: 1.8rem;
  }
`;

export { ProjectDiv, ProjectTitle, InfoDiv };
