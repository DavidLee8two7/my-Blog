import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link prefetch href="/index">
      <a>about</a>
    </Link>
    <Link prefetch href="/projects">
      <a>projects</a>
    </Link>
    <Link prefetch href="/skills">
      <a>Know-how</a>
    </Link>
    <Link prefetch href="/resources">
      <a>resource</a>
    </Link>
    <Link prefetch href="/blogs">
      <a>blogs</a>
    </Link>
    <Link prefetch href="/writeblog">
      <a>write blog</a>
    </Link>
    <Link prefetch href="/contact">
      <a>contact</a>
    </Link>
  </NavStyles>
);

export default Nav;
