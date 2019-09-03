import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layouts';
import Wrapper from '../components/wrapper';

require('prismjs/themes/prism-tomorrow.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');

require('./styles.module.css');

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <br />

          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        <br />
        <br />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html,
      frontmatter {
        title
      }
    }
  }
`;
