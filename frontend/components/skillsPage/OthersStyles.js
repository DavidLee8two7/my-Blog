import styled from "styled-components";

const OthersDiv = styled.div`
  width: 100%;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  background: white;
  justify-items: center;
  align-items: center;
`;

const OthersTitle = styled.div`
  width: 100%;
  background: black;
  color: white;
  font-weight: 500;
  font-size: 3.5rem;
  letter-spacing: 1.1px;
  text-align: left;
  padding: 2rem 0 2rem 3rem;
  margin-bottom: 7rem;
  @media screen and (max-width: 900px) {
    padding: 1rem 0 1rem 3rem;
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 700px) {
    padding: 0.5rem 0 0.5rem 1.5rem;
    font-size: 2rem;
    margin-bottom: 0;
  }
  @media screen and (max-width: 350px) {
    padding: 0.25rem 0 0.25rem 0.5rem;
    font-size: 1.5rem;
  }
`;

const EducationDiv = styled.div`
  width: 80%;
  padding: 2rem;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 7rem;
  @media screen and (max-width: 900px) {
    width: 100%;
    &:last-child {
      margin-bottom: 4rem;
    }
  }
  @media screen and (max-width: 700px) {
    box-shadow: none;
    margin-bottom: 0;
  }
`;

const EducationInfo = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid gray;
  img {
    height: 7rem;
  }
  h3 {
    margin-left: 6rem;
    font-weight: 500;
    font-size: 2.3rem;
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    img {
      height: 5rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 500px) {
    h3 {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 450px) {
    h3 {
      margin-left: 3rem;
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 450px) {
    h3 {
      margin-left: 1.5rem;
      font-size: 1.2rem;
    }
  }
`;

const OthersDescription = styled.div`
  padding: 2rem;
  h4 {
    font-size: 1.8rem;
    font-weight: 500;
  }
  ul {
    list-style: none;
    li {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
  border-bottom: 10px double gray;
  margin-bottom: 7rem;
  &:last-child {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 900px) {
    padding: 1rem;
    h4 {
      font-size: 1.6rem;
      font-weight: 500;
    }
    ul {
      li {
        font-size: 1.4rem;
      }
    }
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 700px) {
    margin-bottom: 3rem;
    padding: 0;
  }
  @media screen and (max-width: 500px) {
    h4 {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 450px) {
    h4 {
      font-size: 1.2rem;
    }
  }
`;

export {
  EducationInfo,
  EducationDiv,
  OthersDiv,
  OthersTitle,
  OthersDescription
};
