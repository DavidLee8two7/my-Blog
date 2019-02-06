import styled from "styled-components";

const ProjectDiv = styled.div`
  grid-row: 6;
  grid-column: 1 / -1;
  z-index: 2;
  width: 99%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: white;
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (max-width: 500px) {
    box-shadow: none;
    background: transparent;
  }
`;

const InfoDiv = styled.div`
  margin: 6rem 0;
  padding: 1rem 3rem;
  width: 100%;
  box-shadow: 0 0 1rem rgba(126, 126, 126, 0.5);
  text-align: left;
  border-radius: 3px;
  h4 {
    font-size: 2.4rem;
    font-weight: 600;
    width: 100%;
    padding: 1rem 3rem;
    border-radius: 3px;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to bottom,
      rgba(247, 223, 30, 0.25),
      rgba(247, 223, 30, 0.95)
    );
  }
  span {
    border-radius: 3px;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to bottom,
      rgba(247, 223, 30, 0.25),
      rgba(247, 223, 30, 0.95)
    );
  }
  p {
    padding: 1rem 3rem;
    font-size: 2rem;
    text-align: left;
  }
  @media (max-width: 1800px) {
    grid-row: 1;
    grid-column: 1 / -1;
    margin: 0;
    padding: 0 2rem;
    h4 {
      font-size: 2.2rem;
      padding: 0.5rem 2rem;
    }
    p {
      padding: 0.5rem 1.5rem;
      font-size: 1.8rem;
    }
  }
  @media (max-width: 950px) {
    margin: 0;
    padding: 0 1rem;
    h4 {
      font-size: 2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 700px) {
    box-shadow: none;
  }
  @media (max-width: 500px) {
    p {
      font-size: 1.4rem;
    }
  }
`;

export { ProjectDiv, InfoDiv };
