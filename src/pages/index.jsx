import React from 'react';
import Link from 'gatsby-link';
//import { Link } from 'gatsby';

import Fullscreen from '../components/fullscreen';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';
import TagOneStyleAbout from '../components/tagOneStyleAbout';
import Footer from '../components/footer';

import styles from './styles.module.css';

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <div>
      <Fullscreen className={styles.intro} firstItem>
        <Wrapper>
          <h1>
          Hi there. I’m Anup Vasudevan.
            <br />
            <br />
          Welcome to Serving Niches.
            <br />
            <br />
          Check out the <Link className={styles.link} to="/blog">blog</Link>.
          </h1>
        </Wrapper>
      </Fullscreen>

      <Wrapper>
        <TagOneStyleAbout />
      </Wrapper>

      <Footer />
    </div>
  </div>
);

export default Index;
