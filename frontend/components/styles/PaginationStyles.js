import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 4rem 0;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: black;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid black;
    &:last-child {
      border-right: 0;
    }
  }
  a {
    color: ${props => props.theme.orange};
  }
  a[aria-disabled="true"] {
    color: ${props => props.theme.black};
    pointer-events: none;
  }
  @media screen and (max-width: 1200px) {
    margin: 2rem 1rem;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 950px) {
    .toggle {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export default PaginationStyles;
