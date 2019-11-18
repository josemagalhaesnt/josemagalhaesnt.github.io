import React, { Component } from 'react';
import './About.scss';
import { SkillList } from '../../components';
import { Timeline, Event } from 'react-timeline-scribble';
import developerPic from '../../assets/images/profile.jpg';

class About extends Component {
  render() {
    return (
      <main>
        <section className='About' id='about'>
          <div className='About-dev container'>
            <h2 className='title title--center'>
              Sobre O Desenvolvedor
            </h2>
            <div className='row'>
              <div className='col'>
                <img
                  src={developerPic}
                  alt='Developer pic'
                  className='About-dev__picture'
                />
              </div>

              <div className='col col-md-9'>
                <p className='About-dev__description'>
                  Estudante de Engenharia de Computação no Instituto
                  Federal de Ciência, Educação e Tecnologia - IFCE,
                  atuando desde 2017 com o Desenvolvimento Web de
                  Front-End e desde então, me dedicando para ser um
                  profissional cada vez mais capacitado, desenvolvendo
                  projetos de qualidade, aprendendo novas tecnologias,
                  padrões e boas práticas de Programação e Design para
                  agregar cada vez mais valor às minhas skills, além
                  de desenvolver novas skills.
                </p>

                <h3 className='title'>Skills</h3>
                <div className='row'>
                  <SkillList />
                </div>

                <h3 className='title'>Experiências</h3>
                <div className='row'>
                  <Timeline>
                    <Event
                      interval={'Agosto 2019'}
                      title={'Desenvolvedor Front-End'}
                      subtitle={'OSF Global Services'}>
                        Trabalhando como desenvolvedor Front-End e me desenvolvendo nas
                        principais linguagens de desenvolvimento do mercado, incluindo JavaScript e React.
                      </Event>
                    <Event
                      interval={'Set/2017 – Jun/2019'}
                      title={'Bolsista de Desenvolvimento Web'}
                      subtitle={
                        'IFCE - Laboratório de Práticas Culturais Tradicionais'
                      }>
                      Durante o período da bolsa, trabalhei no
                      desenvolvimento e, em seguida, na manutenção do
                      Projeto Digital Mundo Miraira, um ambiente
                      virtual com o propósito de minimizar demandas no
                      ensino em arte em relação ao Patrimônio
                      Imaterial e à Cultura Cearense.
                    </Event>
                  </Timeline>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export { About };
