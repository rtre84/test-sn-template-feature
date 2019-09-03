import React from 'react';
// import Link from 'gatsby-link';
import { Link } from 'gatsby';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import ahmSrc from './img/ahm.png';
import inlightSrc from './img/inlight.png';
import lighthouseSrc from './img/lighthouse.png';


import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>About</h1>
          <p>Hi there. I’m a software developer based out of Boston, MA. The work I do, these days, revolves mostly
              around peta-byte scale distributed systems. Occasional freelancing and technical blogging have both
              given me a good reason to try and keep up with the various spaces discussed here.
          </p>

          <p>My focus for the past 7 years has been on consulting and building software at brands like Directv, DSW,
              T-Mobile, Houghton Mifflin Harcourt, Wellington Management, Thesys CAT (a subsidiary of Thesys Tech
              formerly known as Tradeworx, Inc.) . Prior to that I used to do freelance web development and work at a
              small business called Eagle Stationery Est. based out of the United Arab Emirates.
          </p>

          <p>Serving Niches focuses on Software Engineering, the more technical aspects of Online Marketing,
              Niche Marketing, Analytics, Fintech, Blockchain and occasionally AI and its various subsets.
          </p>

          <p>If you have a project in mind, <Link to="/contact">get in touch</Link>.
          </p>
        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Programming Languages</h4>
            <p>Java, Scala, Python, PHP, Ruby, HTML5, CSS3, Javascript, R, SQL, C++, Erlang, Elixir</p>
            <h4>Frameworks/Libraries</h4>
            <p>Spring, Ruby On Rails, Node.js, jQuery, Angular, React, Laravel, Flask, Sinatra, Django, Cement, NodeJS, MeteorJS, Phoenix, Apache Spark, Hadoop, Kafka, Elasticsearch, Kibana, Keras, Tensorflow</p>
            <h4>Databases</h4>
            <p>MySQL, SQLServer, SQlite3, MongoDB, S3, AWS DynamoDB, GAE datastores, PostgreSQL/PostGIS, Azure Blob, Hive, AWS Athena</p>
            <h4>Web Analytics Tools</h4>
            <p>Adobe (Omniture) SiteCatalyst, Discover 3, Google Analytics, Segment, Fiddler, Firebug, Charles, Wireshark, Piwik</p>
            <h4>Other</h4>
            <p>Ethereum ( Solidity, Embark, Truffle.js ), StatTools, @RISK, Unreal Engine 4</p>
          </div>

        </aside>
      </div>

      {/*
      <section>
        <h2>What people say</h2>
        <div className={styles.referrals}>
          <div className={styles.referral}>
            <img src={lighthouseSrc} alt="Lighthouse logo" />
            <div>
              <h4>Patrick Carne, Lighthouse</h4>
              <p>“Over the last 3 years Oliver has grown into a solid front-end developer, with an ability and eagerness to pick up new technologies quickly. I have no doubt Oliver will go on to be an exceptional developer in any area he chooses to focus.”</p>
            </div>
          </div>

          <div className={styles.referral}>
            <img src={inlightSrc} alt="Inlight logo" />
            <div>
              <h4>Sina Karimi, Inlight</h4>
              <p>“Oliver is an exceptional front end developer. He has grown rapidly over the past few years to be a valuable member of any development team. It has been a real pleasure to work with him over the years.”</p>
            </div>
          </div>

          <div className={styles.referral}>
            <img src={ahmSrc} alt="Ahm logo" />
            <div>
              <h4>James Hanley, Ahm</h4>
              <p>“I worked with Oliver on a number of projects for the Ahm websites. When a new brief would come in he was consultative and logical in his approach to help us define a solution to our business problem. His collaborative approach and comfort with clients/business makes him a great addition to a digital development team.”</p>
            </div>
          </div>
        </div>
      </section>
        */}

    </Wrapper>
  </ContentPage>
);

export default About;
