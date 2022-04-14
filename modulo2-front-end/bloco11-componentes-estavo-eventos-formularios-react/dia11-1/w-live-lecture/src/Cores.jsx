import React from "react";
import colors from "./colors";

class Cores extends React.Component {
  render() {
    return (
      <ul>
        {colors
          .filter(({ name }) => this.props.filter === '' || name.includes(this.props.filter))
          .map(({ name, hex }) => (<li key={hex}>{name}</li>))}
      </ul>
    );
  }
}

export default Cores;
