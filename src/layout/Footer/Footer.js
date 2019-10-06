import React from "react";
import "./Footer.scss";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: new Date().getFullYear()
    };
  }

  render() {
    return (
      <footer className="Footer">
        <span className="Footer__copyright">
          Copyright &copy; {this.state.currentYear} <br /> All Rights Reserved.
          <a href="https://www.github.io/josemagalhaesnt"> José Magalhães</a>
        </span>
      </footer>
    );
  }
}
