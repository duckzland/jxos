import React from 'react';
import PropTypes from 'prop-types';

import { Frame } from '../components/Frame';
import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import { graphql } from 'gatsby';
import { Donation } from '../components/Donation';

import cx from 'classnames';

const styles = theme => ({
    root: {},
    main: {
        position: 'relative',
        display: 'block',
        margin: [30, 0, 60]
    },
    frame: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    inner: {
        padding: [20, 50]
    },
    svg_frame_c: {
        display: 'block',
        width: '100%',
        height: '100%',
        shapeRendering: 'geometricPrecision'
    },
    svg_frame_d: {
        display: 'block',
        width: '100%',
        height: '100%',
        shapeRendering: 'geometricPrecision'
    },
    '@media (max-width: 560px)' : {
        inner: {
            padding: [20, 30]
        },
    }
});

class DocsPost extends React.Component {
    static propTypes = {
        classes: PropTypes.object
    };

    render() {
        const { classes } = this.props;
        const post = this.props.data.markdownRemark;

        return (
            <Main className={classes.root} title={ post.frontmatter.title }>
                <article>
                    <Secuence stagger>
                        <Fader className={ classes.main }>
                            <Frame type="frame_c" className={classes.frame} classes={classes}/>
                            <div className={classes.inner} dangerouslySetInnerHTML={{ __html: post.html }} />
                            <Frame type="frame_d" className={classes.frame} classes={classes}/>
                        </Fader>
                        <Donation />
                    </Secuence>
                </article>
            </Main>
        );
    }
}

export default withStyles(styles)(DocsPost);

export const docQuery = graphql`
  query DocsPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
