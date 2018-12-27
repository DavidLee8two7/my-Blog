import styled from "styled-components";

const NodeStyles = styled.div`
  padding: 2rem;
  position: relative;
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
  background-size: cover;
  background-image: linear-gradient(
      to right bottom,
      rgba(225, 225, 225, 0.85),
      rgba(237, 237, 237, 0.85)
    ),
    url(/static/img/herbalist.jpg);
  ${props => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid ${props => props.theme.lightGray};
    font-family: ${props => props.theme.fontDisplay};
    font-size: 3rem;
    font-weight: 600;
    line-height: 2;
    color: black;
    text-align: center;
  }
  footer {
    border-top: 10px double ${props => props.theme.lightGray};
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

export default NodeStyles;
