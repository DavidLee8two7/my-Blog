import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link href="/story">
      <a>story</a>
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
  </NavStyles>
);

export default Nav;
