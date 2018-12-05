import React, { Component } from "react";
import { Experience, ExperienceTitle } from "./ExperienceStyles";
import SectionTitle from "../styles/SectionTitle";
import Reveal from "react-reveal/Reveal";

class ExperienceSection extends Component {
  render() {
    return (
      <Reveal bottom>
        <div
          style={{
            zIndex: "2",
            gridRow: "6",
            gridColumn: "1 / -1",
            width: "100%",
            justifyItems: "center",
            alignItems: "center"
          }}
        >
          <ExperienceTitle>
            <a href="/skills">
              <SectionTitle
                visible={"Experience 📽️"}
                invisible={"You can find more samples by clicking here!"}
              />
            </a>
          </ExperienceTitle>
          <Experience>
            <div className="company__shape">
              <img
                src="/static/img/CJ.jpeg"
                alt="CJ"
                className="company__img"
              />
              <div className="company__caption">CJ</div>
            </div>
            <div className="company__text">
              <h3>experience</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </Experience>
          <Experience>
            <div className="company__shape">
              <img
                src="/static/img/CJ.jpeg"
                alt="CJ"
                className="company__img"
              />
              <div className="company__caption">CJ</div>
            </div>
            <div className="company__text">
              <h3>experience</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </Experience>
        </div>
      </Reveal>
    );
  }
}

export default ExperienceSection;
