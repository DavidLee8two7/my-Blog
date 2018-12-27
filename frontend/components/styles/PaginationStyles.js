import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid black;
  border-radius: 6px;
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
    color: ${props => props.theme.lightBlue};
  }
  a[aria-disabled="true"] {
    color: ${props => props.theme.black};
    pointer-events: none;
  }
`;

export default PaginationStyles;
