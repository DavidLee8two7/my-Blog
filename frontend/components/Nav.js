import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link href="/home">
      <a>home</a>
    </Link>
    <Link href="/techstack">
      <a>tech stack</a>
    </Link>
    <Link href="/projects">
      <a>projects</a>
    </Link>
    <Link href="/blog">
      <a>blog</a>
    </Link>
    <Link href="/photos">
      <a>photos</a>
    </Link>
  </NavStyles>
);

export default Nav;
