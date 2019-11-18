import React, { Component } from "react";
import "./Header.scss";
import { Button } from '../../components';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="intro">
          <h3 className="intro__hello">console.log("Hello World!");</h3>
          <h1 className="intro__name">José Magalhães</h1>
          <span className="intro__position">Desenvolvedor Front-End</span>

          <div className="social">
            <span>
              <a
                href="https://github.com/josemagalhaesnt"
                title="GitHub"
                className="social__link"
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span>
              <a
                href="http://lattes.cnpq.br/4413604877482150"
                title="Currículo Lattes"
                className="social__link"
              >
                <i className="fas fa-address-card"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/josemagalhaesnt"
                title="Linkedin"
                className="social__link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>

          <div className="learn-more">
            <Button link="#about" />
          </div>
        </div>
      </header>
    );
  }
}

export {Header};
