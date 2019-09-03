import React, { Component, Fragment } from 'react';
import { graphql, Link } from 'gatsby';

import styles from './styles.module.css';
import BlogPostSmall from '../blog-post-small';
import BlogPostBig from '../blog-post-big';


class BlogList extends Component {
  render() {
    const blogPosts = this.props;
    return (
      <section className="blogs pt-60 pt-lg-100 pb-45 pb-sm-60 pb-lg-70" id="blogs-16">
        <br />
        <br />

        <div>
          <div className="container">
            <div className="row">
              {blogPosts.posts.allMarkdownRemark.edges.map(({ node }, index) => (
                // The below logic renders the 0th, 1st and every panel at an index
                // that is a multiple of 9 using the BlogPostBig component
                (index === 1 || index % 9 === 0)
                  ? <BlogPostBig post={node} index={index} key={node.id} />
                  : <BlogPostSmall post={node} index={index} key={node.id} />
              ))}
            </div>
          </div>
        </div>

        <br />
        <br />
      </section>
    );
  }
}

export default BlogList;
