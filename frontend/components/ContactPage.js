import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./styles/ErrorMessage";

const CREATE_MEMO_MUTATION = gql`
  mutation CREATE_MEMO_MUTATION(
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    createMemo(
      name: $name
      email: $email
      subject: $subject
      message: $message
    ) {
      id
    }
  }
`;

class Memo extends Component {
  state = {
    name: "test",
    email: "test@gmail.com",
    subject: "subject",
    message: "message"
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_MEMO_MUTATION} variables={this.state}>
        {(createMemo, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createMemo();
              Router.push({
                pathname: "/"
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="subject">
                Subject
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="subject"
                  required
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter message"
                  required
                  value={this.state.message}
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

export default Memo;
