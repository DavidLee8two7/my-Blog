import styled from "styled-components";

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 2rem;
  margin: 1rem;
  justify-items: center;
  align-items: center;
  text-align: center;
  ul {
    width: 80%;
    list-style: none;
    li {
      padding: 1rem;
      font-size: 2rem;
      font-weight: 600;
      border-bottom: 1.5px solid ${props => props.theme.lightGray};
    }
  }
`;

export { Description };
