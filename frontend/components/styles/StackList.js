import styled from "styled-components";

const ReactSide = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

const TechType = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: auto;
  border: 1px solid ${props => props.theme.green};
  width: 100%;
  margin: 2px;
  padding: 2px;
`;

const TechIcon = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;
  margin-right: 1px;
  border: 1px solid ${props => props.theme.black};
`;

const TechImg = styled.img`
  background: pink;
  border: 1px solid ${props => props.theme.black};
`;

const TechName = styled.div`
  background: blue;
  border: 1px solid ${props => props.theme.black};
`;

const TechDescription = styled.div`
  border: 1px solid ${props => props.theme.black};
`;

export { ReactSide, TechType, TechIcon, TechDescription, TechImg, TechName };
