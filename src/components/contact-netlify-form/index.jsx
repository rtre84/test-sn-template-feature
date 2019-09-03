import React from 'react';
import { navigateTo } from "gatsby-link";

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

class ContactNetlifyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(() => navigateTo(form.getAttribute('action')))
        .catch(error => error(error));
    };

    render(title) {
      return (
        <div className={styles.contact}>
          <h1>{title || 'Messages make the world go round.'}</h1>
          <p className={styles.email}>
                    Reach out and say hello.
            <br />
          </p>

          <form
            name="serving-niches-form"
            method="POST"
            action="/thanks/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
            onSubmit={this.handleSubmit}
          >
            <p className="hidden" style={{ display: 'None' }}>
              <label>
                            Don’t fill this out if you're human:
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>Name:</label>
              <input className="form-control" type="text" name="name" onChange={this.handleChange} />
            </p>
            <p>
              <label>Email:</label>
              <input className="form-control" type="text" name="email" onChange={this.handleChange} />
            </p>
            <p>
              <label>Message:</label>
              <textarea className="form-control textarea" name="message" onChange={this.handleChange} />
            </p>
            <button className="square-button form-control" type="submit">Send</button>
          </form>

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
    }
}

export default ContactNetlifyForm;
