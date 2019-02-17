import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./styles/ErrorMessage";

const CREATE_BLOG_MUTATION = gql`
  mutation CREATE_BLOG_MUTATION(
    $title: String!
    $subject: String
    $problem: String
    $opinion: String
    $image: String
    $largeImage: String
  ) {
    createBlog(
      title: $title
      subject: $subject
      problem: $problem
      opinion: $opinion
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class WriteBlog extends Component {
  state = {
    title: "",
    subject: "",
    problem: "",
    opinion: "",
    image: "",
    largeImage: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/davidlee8two7/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  render() {
    return (
      <Mutation mutation={CREATE_BLOG_MUTATION} variables={this.state}>
        {(createBlog, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createBlog();
              Router.push({
                pathname: "/blogs",
                query: { id: res.data.createBlog.id }
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an image"
                  required
                  onChange={this.uploadFile}
                />
                {this.state.image && (
                  <img
                    width="200"
                    src={this.state.image}
                    alt="Upload Preview"
                  />
                )}
              </label>
              <label htmlFor="title">
                Title
                <input
                  type="title"
                  id="title"
                  name="title"
                  placeholder="title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="subject">
                Subject
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  required
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="problem">
                Problem
                <textarea
                  id="problem"
                  name="problem"
                  placeholder="Enter problem"
                  required
                  value={this.state.problem}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="opinion">
                Opinion
                <textarea
                  id="opinion"
                  name="opinion"
                  placeholder="Enter opinion"
                  required
                  value={this.state.opinion}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default WriteBlog;
