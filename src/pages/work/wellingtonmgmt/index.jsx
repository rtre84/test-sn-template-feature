import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';


const images = {
  desktop: [
    { src: require('./img/centre-detail.png'), description: 'KindyNow centre detail' },
    { src: require('./img/attendees.png'), description: 'KindyNow attendees list' },
    { src: require('./img/centre-list.png'), description: 'KindyNow centre list' },
    { src: require('./img/stats.png'), description: 'KindyNow centre stats' },
    { src: require('./img/login.png'), description: 'KindyNow login' },
  ],
  mobile: [
    { src: require('./img/mobile-centre-detail.png'), description: 'kindyNow centre detail rooms' },
    { src: require('./img/mobile-centre-detail-rooms.png'), description: 'kindyNow centre detail' },
    { src: require('./img/mobile-attendees.png'), description: 'kindyNow attendees list' },
    { src: require('./img/mobile-centre-list.png'), description: 'kindyNow centre list' },
    { src: require('./img/mobile-calendar.png'), description: 'kindyNow calendar date picker' },
  ],
};

const KindyNow = ({ location }) => {
  const project = projects.find(p => p.slug === 'wellingtonmgmt');

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <Wrapper>

        <h3>Project</h3>
        <p>Responsible for building out an internal Zeppelin based application powered by AWS EMR batch
            processing pipelines. The application measured portfolio managers and analysts contribution to alpha within
            the firm for any given time window.
        </p>

        <ul className={styles.responsibilities}>
          <li>Built and maintained responsive web applications using front-end frameworks, Angular, Typescript, ReactJS, Redux, Bootstrap, React-bootstrap, AJAX, HTML5, CSS3, Web Services and other related technologies.</li>
          <li>Helped build, analyze and maintain existing rest and soap based web services/service oriented architecture (Scala, Java, Node Js, Tomcat (Java))</li>
          <li>Worked with Relational Databases like MySQL, Oracle, Aurora.</li>
          <li>Repurposed Python/Ruby/Groovy scripts to Java/Python/AWS Lambda based on accepted Wellington Management standards. Eg. Automating AWS Athena Table creation for 52 tables from a generated Hive (HQL) script.</li>
          <li>Built, made a case for and pushed for Scala and functional programming as an approved programming language/paradigm at Wellington Management.</li>
          <li>Build end to end data pipelines for batch processing using Apache Spark on AWS EMR.</li>
          <li>Build out CI, blue/green deployment workflow using CloudFormation templates and internal tools to deploy AWS EMR solution in various environments.</li>
          <li>Build, maintain, document and analyze data oriented solutions built on Spark/Hadoop/Cassandra and Web Analytics.</li>
          <li>Work with No SQL database/Graph database and Amazon Web Services.</li>
          <li>Work with Mongo Db, Neo4j, Hadoop with MapReduce and parallel data processing concepts.</li>
          <li>Help implement solutions using modem software development tools (GIT, JIRA, Maven, etc.), open source frameworks and testing methodologies.</li>
          <li>Develop mobile applications/solutions using responsive web design.</li>
        </ul>
      </Wrapper>
    </ProjectPage>
  );
};

export default KindyNow;
