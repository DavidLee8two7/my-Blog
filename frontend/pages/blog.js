import SingleBlog from "../components/SingleBlog";

const Blog = props => (
  <div>
    <SingleBlog id={props.query.id} />
  </div>
);

export default Blog;
