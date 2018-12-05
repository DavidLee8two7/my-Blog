import styled from "styled-components";

const Card = styled.div`
  perspective: 150rem;
  position: relative;
  height: 52rem;
  &:hover .front {
    transform: rotateY(-180deg);
  }
  &:hover .back {
    transform: rotateY(0);
  }
  @media only screen and (max-width: 600px), only screen and (hover: none) {
    height: auto;
    border-radius: 3px;
    background-color: white;
    box-shadow: 0 1.5rem 4rem rgba(black, 0.15);
  }
  @media only screen and (max-width: 600px), only screen and (hover: none) {
    &:hover .front {
      transform: rotateY(0deg);
    }
  }
`;

const CardFront = styled.div`
  height: 52rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(orange, 0.15);
  background-color: white;
  color: ${props => props.theme.black};
  h4 {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: white;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
  }
  span {
    padding: 1rem 1.5rem;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to right bottom,
      rgba(white, 0.85),
      rgba(black, 0.85)
    );
  }
  @media only screen and (max-width: 600px), only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
  }
`;

const CardBack = styled.div`
  height: 52rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(black, 0.15);
  transform: rotateY(180deg);
  background-image: linear-gradient(to right bottom, white, black);
  @media only screen and (max-width: 600px), only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
    transform: rotateY(0);
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
`;

const PictureDiv = styled.div`
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-image: linear-gradient(to right bottom, white, black),
    url(/static/img/working_pic.jpg);
`;

const Details = styled.div`
  padding: 3rem;
  ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;
    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;
      &:not(:last-child) {
        border-bottom: 1px solid white;
      }
    }
  }
  @media only screen and (max-width: 600px), only screen and (hover: none) {
    padding: 1rem 3rem;
  }
`;

const BackDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
  @media only screen and (max-width: 600px), only screen and (hover: none) {
    position: relative;
    top: 0%;
    left: 0;
    transform: translate(0);
    width: 100%;
    padding: 7rem 4rem 4rem 4rem;
  }
`;

const Text = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 8rem;
  .title {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .desc {
    font-size: 6rem;
    font-weight: 100;
  }
  @media only screen and (max-width: 600px), only screen and (hover: none) {
    margin-bottom: 3rem;
    .desc {
      font-size: 4rem;
    }
  }
`;

export { Card, CardFront, CardBack, PictureDiv, Details, BackDetails, Text };
