import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.black};
  border-radius: 6px;
  font-size: 1.8rem;
  letter-spacing: 1px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${props => props.theme.black};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: black;
    pointer-events: none;
  }
`;

export default PaginationStyles;
