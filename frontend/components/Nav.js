import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link href="/index">
      <a>about</a>
    </Link>
    <Link href="/projects">
      <a>projects</a>
    </Link>
    <Link href="/skills">
      <a>skills</a>
    </Link>
    <Link href="/contact">
      <a>contact</a>
    </Link>
  </NavStyles>
);

export default Nav;
