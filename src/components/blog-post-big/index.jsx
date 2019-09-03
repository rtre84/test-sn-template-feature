import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './styles.module.css';

class BlogPostBig extends Component {
  render() {
    return (
      <div className={styles.panel_big}>
        <div className="col-12 text-center mb-15 mb-sm-30">
          <div className="ratio-1-1">
            <div className="panel d-flex">
              <div className="align-self-center ph-30">
                <img
                  className="mb-40"
                  src={this.props.post.frontmatter.cover.publicURL}
                  alt=""
                  width="600"
                  height="230"
                />
                <div className="mb-15">
                  {this.props.post
                    ? <h3>{this.props.post.frontmatter.title}</h3>
                    : <h3>Untitled</h3>
                }
                </div>
                <p className="mb-30">
                  { this.props.post
                    ? this.props.post.excerpt
                    : 'Sorry, there is no available excerpt.'
                  }
                </p>

                {this.props.post
                  ? <Link className="arrow b-500" to={this.props.post.fields.slug}>Read more</Link>
                  : <Link className="arrow b-500" to="">Read more</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPostBig;
