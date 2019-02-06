import React, { Component } from "react";
import Head from "next/head";
import Resources from "./styles/resourceCard";
import {
  devTools,
  htmlResources,
  cssResources,
  javascriptResources,
  fontResources,
  colorResources,
  imagesAndVidoes,
  iconsAndOthers,
  designs,
  communities,
  allOthers
} from "../lib/resourceData";
import {
  ResourceDiv,
  ResourceIntro,
  ResourceList,
  Title
} from "./styles/ResourceStyles";

class Resource extends Component {
  render() {
    return (
      <ResourceDiv>
        <Head>
          <title>David Lee | Resources</title>
        </Head>
        <ResourceIntro>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 20">
            <text x="10" y="20">
              Resources
            </text>
          </svg>
          <p>Tools that I often use. This saves time.</p>
        </ResourceIntro>
        <ResourceList>
          {devTools.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>HTML5 resources</h4>
        </Title>
        <ResourceList>
          {htmlResources.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>CSS resources</h4>
        </Title>
        <ResourceList>
          {cssResources.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>JavaScript resources</h4>
        </Title>
        <ResourceList>
          {javascriptResources.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>Fonts and typography tools</h4>
        </Title>
        <ResourceList>
          {fontResources.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>Colors, themes and tools</h4>
        </Title>
        <ResourceList>
          {colorResources.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>Images & Videos</h4>
        </Title>
        <ResourceList>
          {imagesAndVidoes.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>Icons and tools</h4>
        </Title>
        <ResourceList>
          {iconsAndOthers.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>Design samples</h4>
        </Title>
        <ResourceList>
          {designs.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>Communities and blogs</h4>
        </Title>
        <ResourceList>
          {communities.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
        <Title>
          <h4>Planning, optimization & deploymenet</h4>
        </Title>
        <ResourceList>
          {allOthers.resources.map(resource => (
            <Resources resource={resource} key={resource.subject} />
          ))}
        </ResourceList>
      </ResourceDiv>
    );
  }
}

export default Resource;
export { ALL_RESOURCE_QUERY };
