import React, { Component } from 'react';
import Link from 'gatsby-link';

import Fullscreen from '../fullscreen';
import Wrapper from '../wrapper';

import styles from './styles.module.css';
import OutboundLink from '../outbound-link';
import Icon from '../icon';


export default class Footer extends Component {
  componentDidMount() {
    this.setCopyrightElementContents();
  }

    setCopyrightElementContents = () => {
      const currentCopyrightYear = window.Date().split(' ')[3] || '2018';
      const currentCopyrightSelector = '#copyright > p';
      const currentCopyrightElement = document.querySelector(currentCopyrightSelector);

      const newCopyrightElement = document.createElement('p');
      const newCopyrightContents = document.getElementById('copyright')
        .innerHTML
        .trim()
        .replace('Current Year ;)', currentCopyrightYear);
      newCopyrightElement.innerHTML = newCopyrightContents;

      currentCopyrightElement.parentNode.replaceChild(newCopyrightElement, currentCopyrightElement);
    };

    render() {
      return (
        <div>
          <Fullscreen className={styles.footer} firstItem>
            <Wrapper>
              <section className="footers" id="footers-9">
                <div className="container">
                  <div className="bb">
                    <div className="row p-40 p-lg-80">
                      <div className="col-6 col-sm-3 mb-40 mb-sm-0">
                        <h5 className="mb-20">Other Pages</h5>
                        <p className="mb-5">
                          <Link to="/about">About</Link>
                        </p>
                        <p className="mb-5">
                          <Link to="/work">Work</Link>
                        </p>
                        <p className="mb-5">
                          <Link to="/blog">Blog</Link>
                        </p>
                        <p className="mb-5">
                          <Link to="/contact">Contact</Link>
                        </p>
                      </div>
                      <div className="col-6 col-sm-3 mb-40 mb-sm-0" />
                      <div className="col-6 col-sm-3">
                        <h5 className="mb-20">Contact Me</h5>
                        <p className="mb-5">
                          <OutboundLink to="mailto:hello@servingniches.com">hello@servingniches.com</OutboundLink>
                        </p>
                      </div>
                      <div className="col-6 col-sm-3">
                        <h5 className="mb-20">Follow Me</h5>
                        <br />
                        <nav>
                          <OutboundLink to="https://github.com/ServingNiches/">
                            <Icon name="github" />
                          </OutboundLink>
                            &nbsp;&nbsp;&nbsp;
                          <OutboundLink to="https://www.linkedin.com/in/anupvasudevan">
                            <Icon name="linkedin" />
                          </OutboundLink>
                            &nbsp;&nbsp;&nbsp;
                          <OutboundLink to="https://twitter.com/thechronicler/">
                            <Icon name="twitter" />
                          </OutboundLink>
                            &nbsp;&nbsp;&nbsp;
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-center text-center text-sm-left p-40" >
                    <div id="copyright" className={styles.footerCopyrightCenter}>
                      <p>&copy; 2008 &mdash; Current Year ;) &mdash; Serving Niches &mdash; All rights reserved
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Wrapper>
          </Fullscreen>
        </div>);
    }
}
