import React, { Component } from "react";
import { ContactDiv, ContactTitle, Contact } from "./ContactStyles";
import SectionTitle from "../styles/SectionTitle";

class ContactSection extends Component {
  render() {
    return (
      <ContactDiv>
        <ContactTitle>
          <a href="/contact">
            <SectionTitle visible={"Contact 📽️"} invisible={"You can find more samples by clicking here!"} />
          </a>
        </ContactTitle>
        <Contact>
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
