import React, { Component } from "react";
import { ContactDiv, ContactTitle, Contact } from "../styles/ContactStyles";

class ContactSection extends Component {
  render() {
    return (
      <ContactDiv>
        <ContactTitle>Contact title</ContactTitle>
        <Contact>
          <div className="company__shape">
            <img src="/static/img/CJ.jpeg" alt="CJ" className="company__img" />
            <div className="company__caption">CJ</div>
          </div>
          <div className="company__text">
            <h3>experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </Contact>
      </ContactDiv>
    );
  }
}

export default ContactSection;
