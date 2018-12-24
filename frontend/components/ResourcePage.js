import React, { Component } from "react";
import Head from "next/head";
import styled from "styled-components";
import Resources from "./resourcePage/resourceCard";

const Center = styled.div`
  text-align: center;
`;

const ResourceList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  align-items: center;
  background: lightblue;
`;

const ResourceList2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: center;
  align-items: center;
  background: lightgreen;
`;

const data = {
  resources: [
    {
      image: "/static/logo/vscode.png",
      src: "https://code.visualstudio.com/",
      subject: "VS Code",
      message:
        "I recently switched to this code editor ! See the next resource for my setup."
    },
    {
      image: "/static/logo/vscode.png",
      src: "https://github.com/DavidLee8two7",
      subject: "My Visual Studio Code Setup",
      message: "Check out exactly what theme. its good."
    },
    {
      image: "/static/logo/codepen.png",
      src: "https://codepen.io/",
      subject: "Code Pen",
      message:
        "Codepen has become an essential tool for me to quickly test out some ideas or do some tests."
    },
    {
      image: "/static/logo/emmet.png",
      src: "https://docs.emmet.io/cheat-sheet/",
      subject: "subject",
      message:
        "Emmet is an essential tool for writing HTML. This is a very handy cheat sheet to get started."
    }
  ]
};

class Resource extends Component {
  render() {
    return (
      <Center>
        <Head>
          <title>David Lee | Resources</title>
        </Head>
        <h1>Tools</h1>
        <ResourceList>
          {data.resources.map(resource => (
            <Resources resource={resource} key={resource.id} />
          ))}
        </ResourceList>
        <h1>Tools</h1>
        <ResourceList2>
          {data.resources.map(resource => (
            <Resources resource={resource} key={resource.id} />
          ))}
        </ResourceList2>
        <h1>Tools</h1>
        <ResourceList>
          {data.resources.map(resource => (
            <Resources resource={resource} key={resource.id} />
          ))}
        </ResourceList>
        <h1>Tools</h1>
        <ResourceList2>
          {data.resources.map(resource => (
            <Resources resource={resource} key={resource.id} />
          ))}
        </ResourceList2>
        <h1>Tools</h1>
        <ResourceList>
          {data.resources.map(resource => (
            <Resources resource={resource} key={resource.id} />
          ))}
        </ResourceList>
      </Center>
    );
  }
}

export default Resource;
export { ALL_RESOURCE_QUERY };
