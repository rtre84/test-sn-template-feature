import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

const images = {
  desktop: [
    { src: require('./img/collection-listing.jpg'), description: 'Life with Bird collection listing' },
    { src: require('./img/home.jpg'), description: 'Life with Bird home' },
    { src: require('./img/product-listing.jpg'), description: 'Life with Bird product listing' },
    { src: require('./img/product.jpg'), description: 'Life with Bird product' },
    { src: require('./img/store-listing.jpg'), description: 'Life with Bird store listing' },
  ],
  mobile: [
    { src: require('./img/mobile-product-listing.jpg'), description: 'Life with Bird product listing mobile' },
    { src: require('./img/mobile-product.jpg'), description: 'Life with Bird product mobile' },
    { src: require('./img/mobile-cart.jpg'), description: 'Life with Bird cart mobile' },
  ],
};

const TMobile = ({ location }) => {
  const project = projects.find(p => p.slug === 't-mobile');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      {/*<ProjectDescription media={iphone}>*/}
      <Wrapper>
        <h3>Details Coming Soon</h3>
      </Wrapper>
      {/*</ProjectDescription>*/}
      {/*<Wrapper>*/}
        {/*<Macbook>*/}
          {/*<Carousel images={images.desktop} />*/}
        {/*</Macbook>*/}
      {/*</Wrapper>*/}
    </ProjectPage>
  );
};

export default TMobile;
