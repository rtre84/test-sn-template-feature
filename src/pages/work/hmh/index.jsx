import React from 'react';
import projects from '../../../data/projects.js';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const images = {
  desktop: [
    { src: require('./img/cw_web_2.png'), description: 'Chadstone dining' },
    { src: require('./img/hmhco_web_2.png'), description: 'Chadstone home' },
    { src: require('./img/hmhco_shop_web_2.png'), description: 'Chadstone services' },
  ],
  mobile: [
    { src: require('./img/studypop_iphone.jpg'), description: 'Chadstone shopping mobile' },
    { src: require('./img/mathgo_iphone.png'), description: 'Go Math Go iphone screenshot' },
    { src: require('./img/cw_train_2_iphone.jpg'), description: 'Chadstone article mobile' },
    { src: require('./img/cw_train_iphone.jpg'), description: 'Chadstone directions mobile' },
  ],
};

const Chadstone = ({ location }) => {
  const project = projects.find(p => p.slug === 'hmh');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const iphone = (
    <Iphone>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro
        project={project}
        media={image}
      />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>The project involved implementing analytics in various web, hybrid, mobile
            and unity engine powered apps. In addition there was a need to help migrate/deprecate legacy apps,
            re-design and architect existing applications to better use modern technologies better.
        </p>

        <h3>Role</h3>
        <p>I was hired as a Technical Lead/Analytics Engineer on a contract basis to help see this project through.</p>

        <h3>Responsibilities</h3>
        <ul className={styles.responsibilities}>
          <li>Develop, maintain and POC analytics and data driven products.</li>
          <li>Help architect and implement clickstream data products for Consumer facing applications.</li>
          <li>Helped maintain current and legacy applications built on various frameworks – Bootstrap, Phoenix(Elixir/Erlang), Rails(3 & 4 - Ruby), Hybris(Java), Sitecore(.Net) and Angular(1.4 & 2 RC - Javascript) and ReactJS/Redux (Javascript).</li>
          <li>Help prototype an end to end analytics pipeline using Apache Spark, pipeline.io and Scala.</li>
          <li>Code, develop and maintain analytics solutions for iOS, tvOS, Android, Point of Sale (POS), Responsive Web apps and Games written with the Unity Engine.</li>
          <li>QA and write automated tests for the various platforms to intercept and test against HTTP network requests on mobile farms.</li>
          <li>QA ongoing data quality to ensure reporting accuracy and leverage specialized reporting software and data sources for the reporting/analysis process.</li>
          <li>Provide thought leadership for Analytics within the organization.</li>
          <li>Coordinating tags, tracking parameter implementations.</li>
          <li>Advocate the use of web standards, and all modern web technologies.</li>
          <li>Understand business users needs and translate them to technical requirements for implementation.</li>
          <li>Provide analysis of competitor sites and identify areas of opportunity.</li>
        </ul>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default Chadstone;
