import React, { Component } from "react";
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends Component {

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) { return <div />; }

    if (user) {
      return <li><a href="#">Logout</a></li>;
    } else {
      return <li><a href="#">Login</a></li>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Home
          </a>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(query)(Header);