import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (<div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{type}</p>
      <p>Peso médio: {averageWeight.value}{averageWeight.measurementUnit}</p>
    </div>);
  }
}

export default Pokemon;
