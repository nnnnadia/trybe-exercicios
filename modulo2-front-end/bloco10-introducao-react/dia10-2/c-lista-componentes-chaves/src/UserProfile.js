import React, { Component } from "react";
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    const { name, email, avatar } = this.props.user;
    return (<div className="user-profile">
      <img src={avatar} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>);
  }
}

export default UserProfile;