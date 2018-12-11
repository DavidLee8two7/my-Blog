import styled from "styled-components";

const ProjectDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr 30%;
`;

const InfoDiv = styled.div`
  z-index: 3;
  margin: 3rem 0;
  padding: 1rem 3rem;
  width: 100%;
  background: ${props => props.theme.white};
  box-shadow: 0 0 1.5rem rgba(126, 126, 126, 0.75);
  text-align: left;
  border-radius: 3px;
  h4 {
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    text-align: right;
    color: ${props => props.theme.black};
    width: 100%;
  }
  span {
    border-radius: 3px;
    padding: 2rem 3rem;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to right bottom,
      rgba(247, 223, 30, 0.95),
      rgba(247, 223, 30, 0.25)
    );
    color: ${props => props.theme.black};
  }
  p {
    padding: 2rem 4rem;
    font-size: 1.9rem;
    text-align: left;
    font-weight: 400;
  }
`;

export { ProjectDiv, InfoDiv };
