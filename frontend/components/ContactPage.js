import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./ErrorMessage";

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $name: String!
    $email: String!
    $subject: String!
    $budget: Int
    $message: String!
  ) {
    createUser(
      name: $name
      email: $email
      subject: $subject
      budget: $budget
      message: $message
    ) {
      id
    }
  }
`;

class CreateUser extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    budget: 0,
    message: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_USER_MUTATION} variables={this.state}>
        {(createUser, { loading, error }) => (
          <Form
            data-test="form"
            onSubmit={async e => {
              e.preventDefault();
              const res = await createUser();
              Router.push({
                pathname: "/thanks",
                query: { id: res.data.createUser.id }
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
                  type="text"
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

              <label htmlFor="budget">
                Budget
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  placeholder="budget"
                  required
                  value={this.state.budget}
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

export default CreateUser;
export { CREATE_USER_MUTATION };
