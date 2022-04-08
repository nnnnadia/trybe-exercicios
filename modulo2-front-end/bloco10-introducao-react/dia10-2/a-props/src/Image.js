import react from "react";

class Image extends react.Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />
  }
}

export default Image;
