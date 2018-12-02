import styled from "styled-components";

const FooterDiv = styled.div`
  z-index: 2;
  grid-row: 8;
  grid-column: 1 / span 4;
  width: 100%;
  justify-items: center;
  align-items: center;
  background: linear-gradient(rgba(33, 100, 244, 0.5), rgba(33, 100, 244, 0.5));
`;

const FooterTitle = styled.div`
  z-index: 3;
  width: 100%;
  grid-row: 1;
  grid-column: 1 / span 4;
  padding: 2rem;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  background-color: ${props => props.theme.offWhite};
`;

const Footer = styled.div`
  z-index: 3;
  width: 85%;
  .footer {
    background-color: orange;
    padding: 10rem 0;
    font-size: 1.4rem;
    color: white;

    @include respond(tab-port) {
      padding: 8rem 0;
    }

    &__logo-box {
      text-align: center;
      margin-bottom: 8rem;

      @include respond(tab-port) {
        margin-bottom: 6rem;
      }
    }

    &__logo {
      width: 15rem;
      height: auto;
    }

    &__navigation {
      border-top: 1px solid gray;
      padding-top: 2rem;
      display: inline-block;

      @include respond(tab-port) {
        width: 100%;
        text-align: center;
      }
    }

    &__list {
      list-style: none;
    }

    &__item {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }

    &__link {
      &:link,
      &:visited {
        color: gray;
        background-color: orange;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        transition: all 0.2s;
      }

      &:hover,
      &:active {
        color: white;
        box-shadow: 0 1rem 2rem rgba(black, 0.4);
        transform: rotate(5deg) scale(1.3);
      }
    }

    &__copyright {
      border-top: 1px solid gray;
      padding-top: 2rem;
      width: 80%;
      float: right;

      @include respond(tab-port) {
        width: 100%;
        float: none;
      }
    }
  }
`;

export { FooterDiv, FooterTitle, Footer };
