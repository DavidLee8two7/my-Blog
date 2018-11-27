import styled from "styled-components";

const NodeStyles = styled.div`
  padding: 20px;
  position: relative;
  background: ${props => props.theme.offWhite};
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 50%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(-100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${props => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid ${props => props.theme.orange};
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    font-family: ${props => props.theme.fontDisplay};
    font-size: 24px;
    font-weight: 800;
    line-height: 2;
    color: ${props => props.theme.orange};
  }
  footer {
    border-top: 10px double ${props => props.theme.orange};
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

export default NodeStyles;
