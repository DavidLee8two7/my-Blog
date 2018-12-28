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
  color: black;
  font-size: 2rem;
  h4 {
    color: black;
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
    width: 90%;
    li {
      text-align: center;
      font-size: 2rem;
      font-weight: 400;
      padding: 1rem;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.black};
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
  text-align: center;
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
    padding: 7rem 4rem 4rem 4rem;
  }
`;

const ProjectInfo = styled.div`
  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.theme.black};
    width: 100%;
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
      text-align: center;
      font-size: 1.8rem;
      font-weight: 400;
      padding: 0.8rem;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.black};
      }
    }
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    h4 {
      font-size: 2rem;
      font-weight: 400;
    }
    ul {
      list-style: none;
      width: 100%;
      li {
        text-align: left;
        font-size: 1.5rem;
        font-weight: 400;
        padding: 0.75rem;
        &:not(:last-child) {
          border-bottom: 1px solid ${props => props.theme.black};
        }
      }
    }
  }
`;

const ProjectLink = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  transition: all 0.3s;
  .icon {
    width: 40%;
    transition: all 0.3s;
    transform: translateY(0px) scale(0.9);
    &:hover {
      transform: translateY(-5px) scale(1.04);
    }
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
