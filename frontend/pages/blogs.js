import BlogsPage from "../components/BlogsPage";

const Blogs = props => {
  return <BlogsPage page={parseFloat(props.query.page) || 1} />;
};

export default Blogs;
