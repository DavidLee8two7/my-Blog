import styled from "styled-components";

const EducationDiv = styled.div`
  width: 70%;
  margin: 5rem 0;
  padding: 2rem;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
  &:last-child {
    margin-top: 0;
  }
`;

const EducationInfo = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 2px solid ${props => props.theme.black};
  img {
    height: 7rem;
  }
  h4 {
    margin-left: 6rem;
    font-weight: 500;
    font-size: 2.3rem;
    text-align: center;
  }
`;

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
  font-size: 3.8rem;
  letter-spacing: 1.1px;
  text-align: left;
  padding: 2rem 0 2rem 3rem;
`;

export { EducationInfo, EducationDiv, OthersDiv, OthersTitle };
