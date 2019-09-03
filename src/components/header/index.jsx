import React, { Component } from 'react';
import Link from 'gatsby-link';
import 'react-github-button/assets/style.css';

import Hamburger from '../hamburger';
import Menu from '../menu';
import Wrapper from '../wrapper';
import ServingNichesLogo from '../../../static/servingnichesLogo_big.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // @TODO: Remove this event listener when menu isn't open.
    document.addEventListener('keydown', this.handleKeyPress);

    // Segment Analytics Tracking
    const segmentScript = document.createElement('script');
    segmentScript.innerText = `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
          analytics.load("SvSdhfyrkvClEvthIOFeUdAir8HxBygY");
          analytics.page();
      }}();`;
    document.body.appendChild(segmentScript);

    // Google Adsense
    //const googleAdsenseScript = document.createElement('script');
    //googleAdsenseScript.async = true;
    //googleAdsenseScript.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

    //const googleAdsenseScript2 = document.createElement('script');
    //googleAdsenseScript2.innerText = `(adsbygoogle = window.adsbygoogle || []).push({
    //    google_ad_client: "ca-pub-8143488620080967",
    //    enable_page_level_ads: true
    //  });`;
    //document.body.appendChild(googleAdsenseScript);
    //document.body.appendChild(googleAdsenseScript2);

    // const jqueryScript = document.createElement('script');
    // jqueryScript.src = 'https://code.jquery.com/jquery-3.3.1.slim.min.js';
    // jqueryScript.integrity = 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo';
    // jqueryScript.crossOrigin = 'anonymous';
    // document.body.appendChild(jqueryScript);
    //
    // const popperScript = document.createElement('script');
    // popperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js';
    // popperScript.integrity = 'sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49';
    // popperScript.crossOrigin = 'anonymous';
    // document.body.appendChild(popperScript);

    // const bootstrapScript = document.createElement('script');
    // bootstrapScript.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js';
    // bootstrapScript.integrity = 'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy';
    // bootstrapScript.crossOrigin = 'anonymous';
    // document.body.appendChild(bootstrapScript);
  }

  toggleMenu(isVisible) {
    this.setState({ menuActive: typeof isVisible === 'undefined' ? !this.state.menuActive : isVisible });
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.toggleMenu(false);
    }
  }
  render() {
    const { menuActive } = this.state;

    return (
      <header className={styles.header}>
        <Wrapper>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              <Link to="/">
                <img src={ServingNichesLogo} alt="serving niches logo" width={132} height={81} />
              </Link>
            </h1>
            <Hamburger onClick={() => this.toggleMenu()} active={menuActive} className={styles.hamburger} />
          </div>
        </Wrapper>
        <Menu onNavClick={() => this.toggleMenu(false)} active={menuActive} />
      </header>
    );
  }
}

