import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'Messages make the world go round.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:info@servingniches.com?subject=Hello%20Anup!" className={styles.link}>info@servingniches.com</a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/servingniches/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/anupvasudevan">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/thechronicler/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;
