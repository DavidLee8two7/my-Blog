import Link from "next/link";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <Link prefetch href="/index">
      <a>About</a>
    </Link>
    <Link prefetch href="/projects">
      <a>Projects</a>
    </Link>
    <Link prefetch href="/experience">
      <a>Experience</a>
    </Link>
    <Link prefetch href="/resources">
      <a>Resource</a>
    </Link>
    <Link prefetch href="/blogs">
      <a>Blogs</a>
    </Link>
    <Link prefetch href="/writeblog">
      <a>Write blog</a>
    </Link>
    <Link prefetch href="/contact">
      <a>Contact</a>
    </Link>
  </NavStyles>
);

export default Nav;
