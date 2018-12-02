import React, { Component } from "react";
import {
  ExperienceDiv,
  Experience,
  ExperienceTitle
} from "../styles/ExperienceStyles";

class ExperienceSection extends Component {
  render() {
    return (
      <ExperienceDiv>
        <ExperienceTitle>ExperienceTitle</ExperienceTitle>
        <Experience>
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
        </Experience>
        <Experience>
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
        </Experience>
      </ExperienceDiv>
    );
  }
}

export default ExperienceSection;
