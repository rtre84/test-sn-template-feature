import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import OutboundLink from '../../../components/outbound-link';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';
import Macbook from '../../../components/macbook';
import Wrapper from '../../../components/wrapper';


const Click = ({ location }) => {
  const project = projects.find(p => p.slug === 'thesys-cat');

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  // const iphone = (
  //   <Iphone>
  //     <Carousel images={images} />
  //   </Iphone>
  // );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      {/* <ProjectDescription media={iphone}> */}
      <Wrapper>
      {/*<ProjectDescription>*/}
        <h3>Project</h3>
        <p>Helped build out one of the largest financial projects ever undertaken in the United States
            commissioned by the SEC. The Project revolved around the flash crash, high volume trading software
            and the Consolidated Audit Trail.
        </p>
        <ul className={styles.responsibilities}>
          <li>Iteratively designed and architected web applications, web services and
              supporting back-end technologies.
          </li>
          <li>Collaborated with front-end and full-stack team members to develop innovative solutions.</li>
          <li>Followed software development lifecycle practices to ensure the quality of code and adherence to
              requirements.
          </li>
          <li>Designed and implemented web services and APIs, using languages such as Typescript, Javascript,
              Python, Java, Scala and C++.
          </li>
          <li>Develop scalable, responsive data-driven web platforms in a team-oriented production environment.</li>
          <li>Utilize knowledge of progressive web apps, javascript frameworks and libraries (React, Angular, jQuery,
              ng-grid etc.) to enhance existing web apps.
          </li>
          <li>Utilize understanding of software craftsmanship principles and software development lifecycle methodologies.</li>
          <li>Write scalable performant code in an approved compiled language to handle 10 to 60 billion events
              a day (e.g., C++, Java).
          </li>
          <li>Write code capable of working in a hybrid cloud/datacenter environment.</li>
        </ul>
      {/*</ProjectDescription>*/}
      </Wrapper>
    </ProjectPage>
  );
};

export default Click;
