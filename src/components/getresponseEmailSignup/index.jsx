import React from 'react';
import Link from 'gatsby-link';

import Fullscreen from '../fullscreen';
import Wrapper from '../wrapper';
import GetResponseEmailSignup from '../getresponseEmailSignup';

import styles from './styles.module.css';


const getresponseEmailSignup = ({ location }) => (
  <div>
    <Fullscreen className={styles.tagOneAbout} firstItem>
      <Wrapper>
          <section className="contacts text-center p-60 p-lg-100" id="contacts-5">
              <div className="container">
                  <h1 className="mb-60">Sign Up For The Newsletter</h1>
                  <div className="row text-center text-sm-left">
                      <div className="col-12 col-sm-6 mb-40 mb-sm-0">
                          <div>
                              <input className="form-control form-control-light mb-20" type="text" placeholder="First Name"/>
                          </div>
                          <div>
                              <textarea className="form-control form-control-light mb-20" placeholder="Input"
                                        rows="4"></textarea>
                              <div className="icon icon-resize"></div>
                          </div>
                          <button className="btn btn-small">Button</button>
                      </div>
                      <div className="col-12 col-sm-6">
                          <h5 className="mb-15">Platforma wireframe kit</h5>
                          <div className="mb-30">
                              <p><a href="mailto:">hello@greatsimple.io</a></p>
                              <p>+1 222-345-0000</p>
                          </div>
                          <h5 className="mb-15">Follow us</h5>
                          <div className="socials"><a href=""><img src="img/socials/facebook.svg"/></a><a href=""><img
                              src="img/socials/twitter.svg"/></a><a href=""><img src="img/socials/instagram.svg"/></a><a
                              href=""><img src="img/socials/behance.svg"/></a><a href=""><img
                              src="img/socials/google.svg"/></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default getresponseEmailSignup;
