import React, { Component } from "react";
import PropTypes from 'prop-types';

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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }),
}

export default Pokemon;
