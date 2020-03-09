import React from 'react';
import './About.scss';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { SkillList } from '../../components';
import { Timeline, Event } from 'react-timeline-scribble';
import developerPic from '../../assets/images/profile.jpg';

const animation = keyframes`${fadeIn}`;

const AnimateSection = styled.div`
  animation: 2s ${animation};
`;

const About = () => {
  return (
    <AnimateSection>
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
                  Estudante de Sistemas e Mídias Digitais na
                  Universidade Federal do Ceará (UFC), comecei a atuar
                  em 2017 como Desenvolvedor Front-End e, desde então,
                  tenho me dedicado para ser um desenvolvedor cada vez
                  mais capacitado, desenvolvendo projetos de
                  qualidade, aprendendo novas tecnologias, padrões e
                  boas práticas de Programação e Design para agregar
                  cada vez mais valor às minhas skills e projetos.{' '}
                </p>

                <h3 className='title'>Skills</h3>
                <div className='row'>
                  <SkillList />
                </div>

                <h3 className='title'>Experiências</h3>
                <div className='row'>
                  <Timeline>
                    <Event
                      interval={'Agosto 2019 - Atualmente'}
                      title={'Desenvolvedor Front-End'}
                      subtitle={'OSF Global Services'}>
                      Trabalhando como desenvolvedor Front-End e me
                      desenvolvendo nas principais linguagens de
                      desenvolvimento do mercado, incluindo
                      JavaScript, React.js e Jest.
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
    </AnimateSection>
  );
};

export { About };
