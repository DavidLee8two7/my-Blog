import styled from "styled-components";

const Card = styled.div`
  margin: 6rem 2rem;
  perspective: 150rem;
  position: relative;
  height: 63rem;
  &:hover .front {
    transform: rotateY(-180deg);
  }
  &:hover .back {
    transform: rotateY(0);
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    height: auto;
    border-radius: 3px;
    box-shadow: 0 0 1rem rgba(126, 126, 126, 0.5);
    margin: 1.5rem 0.5rem;
    .front {
      display: none;
    }
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    &:hover .front {
      transform: rotateY(0deg);
    }
  }
  @media screen and (max-width: 700px) {
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;

const CardFront = styled.div`
  height: 63rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(126, 126, 126, 0.5);
  font-weight: 600;
  font-size: 2rem;
  color: black;
  background: white;
  h4 {
    font-family: ${props => props.theme.fontDisplay};
    text-transform: uppercase;
    text-align: left;
    position: absolute;
    top: 4rem;
    right: 4rem;
  }
  span {
    border-radius: 3px;
    padding: 1rem;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to bottom,
      rgba(247, 223, 30, 0.15),
      rgba(247, 223, 30, 0.95)
    );
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
  }
`;

const PictureDiv = styled.div`
  background-size: cover;
  height: 30rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const FrontDesc = styled.div`
  ul {
    list-style: none;
    width: 94%;
    li {
      text-align: center;
      font-size: 2rem;
      font-weight: 400;
      padding: 1rem;
      &:not(:last-child) {
        border-bottom: 1.4px solid ${props => props.theme.yellow};
      }
    }
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    padding: 1rem 3rem;
  }
`;

const CardBack = styled.div`
  height: 63rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 1rem rgba(126, 126, 126, 0.5);
  transform: rotateY(180deg);
  color: black;
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
    transform: rotateY(0);
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
`;

const BackDesc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  align-items: start;
  justify-items: center;
  grid-gap: 2rem 0;
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    position: relative;
    top: 0%;
    left: 0;
    transform: translate(0);
    width: 100%;
    padding: 5rem;
  }
`;

const ProjectInfo = styled.div`
  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
    margin-left: 4.5rem;
  }
  span {
    border-radius: 3px;
    padding: 1rem 1.5rem;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to bottom,
      rgba(247, 223, 30, 0.95),
      rgba(247, 223, 30, 0.25)
    );
  }
  ul {
    list-style: none;
    width: 100%;
    li {
      text-align: left;
      font-size: 1.8rem;
      font-weight: 400;
      padding: 1.2rem 0;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.yellow};
      }
    }
  }
  @media screen and (max-width: 950px) {
    ul {
      li {
        font-size: 1.6rem;
        padding: 0.2rem 0;
        margin: 0;
        &:not(:last-child) {
          border-bottom: 1px solid ${props => props.theme.yellow};
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    ul {
      li {
        padding: 0;
        &:not(:last-child) {
          border-bottom: 1px solid ${props => props.theme.yellow};
        }
      }
    }
  }
`;

const ProjectLink = styled.div`
  width: 70%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  transition: all 0.3s;
  .icon {
    height: 10rem;
    transition: all 0.3s;
    transform: translateY(0px) scale(0.9);
    &:hover {
      transform: translateY(-5px) scale(1.04);
    }
  }
  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
`;

export {
  Card,
  CardFront,
  PictureDiv,
  FrontDesc,
  CardBack,
  BackDesc,
  ProjectInfo,
  ProjectLink
};
