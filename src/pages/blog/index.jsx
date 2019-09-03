import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { Link } from 'gatsby';
import Meta from '../../components/meta';
import Contact from '../../components/contact';
import { ProjectPanel } from '../../components/project';
import Wrapper from '../../components/wrapper';

import blogPermanentContent from '../../data/blogPosts';

import styles from './styles.module.css';
import Fullscreen from '../../components/fullscreen';
import BlogList from '../../components/blog-list';


class Blog extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <Meta title="Blog" description="Web applications, static websites and mobile apps built built by or collaboratively with Anup Vasudevan." location={this.props.location} />

        {/* <Wrapper className={styles.affiliate}> */}
        {/* <a href="https://www.paperspace.com/&R=I8UGDM"> */}
        {/* <img */}
        {/* src="https://www.paperspace.com/images/pSmallLogo.png" */}
        {/* alt="Paperspace Logo" */}
        {/* width={100} */}
        {/* height={100} */}
        {/* className="float-left" */}
        {/* /> */}
        {/* <h3> */}
        {/* Build next-generation applications and cloud ML/AI pipelines using Paperspace. */}
        {/* </h3> */}
        {/* </a> */}
        {/* </Wrapper> */}

        <BlogList posts={this.props.data} />

        <Fullscreen className={styles.disclaimer}>
          <Wrapper>
            <h3>Disclaimer</h3>
            <p>
                  The material on this website is provided for informational purposes only and does not constitute an
                  offer to sell, a solicitation to buy, or a recommendation or endorsement for any security or strategy,
                  nor does it constitute an offer to provide investment advisory services by Servingniches or me.
            </p>

            <p>
                  In addition, the material offers no opinion with respect to the suitability of any security or specific
                  investment. No information contained herein should be regarded as a suggestion to engage in or refrain
                  from any investment-related course of action as none of Servingniches nor any of its affiliates is
                  undertaking to provide investment advice, act as an adviser to any plan or entity subject to the
                  Employee Retirement Income Security Act of 1974, as amended, individual retirement account or individual
                  retirement annuity, or give advice in a fiduciary capacity with respect to the materials presented
                  herein. If you are an individual retirement or other investor, contact your financial advisor or other
                  fiduciary unrelated to Servingniches about whether any given investment idea, strategy, product or service
                  described herein may be appropriate for your circumstances. All investments involve risk, including loss
                  of principal. Servingniches makes no guarantees as to the accuracy or completeness of the views expressed
                  in the website. The views are subject to change, and may have become unreliable for various reasons,
                  including changes in market conditions or economic circumstances.
            </p>
          </Wrapper>
        </Fullscreen>
      </div>
    );
  }
}

export default Blog;

export const query = graphql`
  query {
  allMarkdownRemark (
  sort: { fields: [frontmatter___date], order: DESC })
  {
    edges {
      node {
        id,
        fields {
          slug
        },
        frontmatter {
          title
          subTitle
          cover {
            id,
            publicURL,
            name
          },
          categories,
          date
        },
        excerpt,
        rawMarkdownBody,
        fileAbsolutePath,
      }
    }
  }
}`;
