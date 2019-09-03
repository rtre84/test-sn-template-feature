import React from 'react';
import projects from '../../../data/freelanceProjects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const images = {
    desktop: [
        { src: require('./img/product.jpg'), description: 'Ahm product' },
    ],
    mobile: [
        { src: require('./img/mobile-compare.png'), description: 'Ahm compare mobile' },
    ],
};

const Acceloninc = ({ location }) => {
    const project = projects.find(p => p.slug === 'acceloninc');

    const logo = (
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
            <ProjectIntro project={project} media={logo} />
            {/*<ProjectDescription media={iphone}>*/}
            {/*<h3>Project</h3>*/}
            {/*<p></p>*/}
            <Wrapper>
                <h3>Details Coming Soon</h3>
            </Wrapper>
            {/*<h3>Role</h3>*/}
            {/*<p>With a team of 5 developers, we created a web app with client and server-side rendering using React. I was mainly responsible for building the current pages using reusable components and handling application state. Notable work includes building the product and product listing pages.</p>*/}
            {/*</ProjectDescription>*/}
            {/*<Wrapper>*/}
            {/*<Macbook>*/}
            {/*<Carousel images={images.desktop} />*/}
            {/*</Macbook>*/}
            {/*</Wrapper>*/}
        </ProjectPage>
    );
};

export default Acceloninc;
