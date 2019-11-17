import React, {Component} from "react";
import "./About.scss";
import { Skill } from "../../components";
import developerPic from '../../assets/images/profile.jpg';

export class About extends Component {
  render() {
    return (
      <main>
        <section className="About" id="about">
          <div className="About-dev container">
            <h2 className="title title--center">Sobre O Desenvolvedor</h2>
            <div className="row">
              <div className="col">
                <img
                  src={developerPic}
                  alt="Developer pic"
                  className="About-dev__picture"
                />
              </div>

              <div className="col col-md-9">
                <p className="About-dev__description">
                  Estudante de Engenharia de Computação no Instituto Federal de
                  Ciência, Educação e Tecnologia - IFCE, atuando desde 2017 com
                  o Desenvolvimento Web de Front-End e desde então, me dedicando
                  para ser um profissional cada vez mais capacitado,
                  desenvolvendo projetos de qualidade, aprendendo novas
                  tecnologias, padrões e boas práticas de Programação e Design
                  para agregar cada vez mais valor às minhas skills, além de
                  desenvolver novas skills.
                </p>

                <h3 className="title">Skills</h3>
                <div className="row">
                  <div className="col">
                    <ul className="skills__list">
                      <Skill name="HTML5" proficiency="90" />
                      <Skill name="CSS3" proficiency="90" />
                      <Skill name="SASS" proficiency="80" />
                      <Skill name="Javascript" proficiency="50" />
                      <Skill name="JQuery" proficiency="40" />
                      <Skill name="ReactJS" proficiency="30" />
                      <Skill name="PHP" proficiency="30" />
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="skills">
                      <Skill name="Bootstrap" proficiency="80" />
                      <Skill name="Wordpress" proficiency="70" />
                      <Skill name="Git" proficiency="60" />
                      <Skill name="Adobe Photoshop" proficiency="60" />
                      <Skill name="Adobe Illustrator" proficiency="20" />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
