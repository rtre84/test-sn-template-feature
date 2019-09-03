import React from 'react';
import projects from '../../../data/freelanceProjects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';
import Wrapper from '../../../components/wrapper';

const images = [
  { src: require('./img/home.png'), description: 'Mr. Red app home' },
  { src: require('./img/in-game.png'), description: 'Mr. Red app in game' },
  { src: require('./img/end-screen.png'), description: 'Mr. Red app end screen' },
];

const MrRed = ({ location }) => {
  const project = projects.find(p => p.slug === 'admuaythai');

  const image = (
    <div className={styles.avatar}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  const iphone = (
    <div className={styles.iphone}>
      <Iphone>
        <Carousel images={images} />
      </Iphone>
    </div>
  );

  return (
    <ProjectPage project={project} location={location} >
      <div>
        <ProjectIntro project={project} media={image} />
        <Wrapper>
          <h3>Details Coming Soon</h3>
        </Wrapper>
      </div>
    </ProjectPage>
  );
};

export default MrRed;
