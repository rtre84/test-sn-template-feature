import React from 'react';

import Fullscreen from '../fullscreen';
import Wrapper from '../wrapper';

import styles from './styles.module.css';


const tagOneStyleAbout = ({ location }) => (
  <div>
    <Fullscreen className={styles.tagOneAbout} firstItem>
      <Wrapper>
        <section className="blogs text-center text-sm-left p-60 p-lg-100" id="blogs-7">
          <div className="container">
            <div className="row justify-content-between">
              <div style={{ float: 'left' }} className="col-12 col-sm-6 col-lg-5 mb-40 mb-sm-0">
                <h5 className="mb-15">About</h5>
                <h1 className="mb-20">What</h1>
                <h1 className="mb-20">Serving Niches Explores</h1>
              </div>
              <div style={{ float: 'right' }} className="col-12 col-sm-6">
                <h4 className="mb-40">
                    Serving Niches focuses on Software Engineering, the more technical aspects of
                    Online Marketing, Niche Marketing, Analytics, Fintech, Blockchain and occasionally AI and
                    its various subsets.
                </h4>
                <br />
                <div className="b-500">Having had to implement these in the past - I keep finding myself
                    wishing they were more accessible. My hope is that this site and producing content
                    will help document these topics
                    a bit better. No technology has survived by being inaccessible after all.
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default tagOneStyleAbout;
