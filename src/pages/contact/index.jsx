import React from 'react';

import ContentPage from '../../components/content-page';
import ContactNetlifyForm from '../../components/contact-netlify-form';
import Contact from '../../components/contact';
import Meta from '../../components/meta';
import Wrapper from '../../components/wrapper';

const ContactPage = ({ location }) => (
  <ContentPage>
    <Meta title="Contact" description="If you have an upcoming project you'd like to talk about or are looking to collaborate and build something special, send me an email." location={location} />
    <Wrapper>
      {/* If the url is servingniches.org, then present the netlify form  */}
      { location.href === 'https://servingniches.org/contact/' || location.href === 'https://servingniches.org/contact' ? (
        <ContactNetlifyForm />
      ) : (
        <Contact />
      )}
    </Wrapper>
  </ContentPage>
);

export default ContactPage;
