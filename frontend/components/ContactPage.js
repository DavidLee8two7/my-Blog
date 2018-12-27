import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import Error from "./styles/ErrorMessage";
import styled from "styled-components";

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
// TODO: play song

const ContactMessage = styled.div`
  img {
    height: 15rem;
    opacity: 0.7;
    :hover {
      .;
    }
  }
`;

class Memo extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
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
              alert(
                "Thank you for contacting me. I will get back to you as soon as possible."
              );
              Router.push({
                pathname: "/"
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <ContactMessage>
                <h4>
                  Please make sure to leave your contact information. I will get
                  back to you as soon as possible.
                </h4>
              </ContactMessage>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
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
                  placeholder=""
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
                  placeholder=""
                  required
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="message">
                How can I help you?
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
