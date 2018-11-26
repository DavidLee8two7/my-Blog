import SkillsStyles from "./styles/SkillsStyles";

class Skills extends React.Component {
  state = {
    name: "js"
  };

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default Skills;
