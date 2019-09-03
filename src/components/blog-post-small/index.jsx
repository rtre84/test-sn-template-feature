import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from './styles.module.css';

class BlogPostSmall extends Component {
  render() {
    return (
      <div className=" col-12 col-sm-2 mb-15 mb-sm-30">
        <div className="ratio-1-1">
          <div className={styles.panel, 'd-flex'}>
            <div className={styles.panel}>
              <div className="align-self-center ph-30">
                {this.props.post
                  ? <h3>{this.props.post.frontmatter.title}</h3>
                  : <h3>Untitled</h3>
                  }
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

export default BlogPostSmall;
