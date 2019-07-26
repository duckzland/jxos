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

const styles = theme => ({
    root: {},
    faq: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: [30, -20, 60],
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        width: 'calc( 50% - 40px)',
        maxWidth: 380,
        minWidth: 320,
        margin: [30, 20],
        padding: [0, 0, 40, 0]
    },
    question: {
        fontSize: 14,
        marginBottom: 10,
        padding: [0, 30, 0, 50],
        lineHeight: '130%'
    },
    answer: {
        fontSize: 14,
        padding: [0, 30, 0, 50],
        lineHeight: '130%'
    }
});

class Documentation extends React.Component {
    static propTypes = {
        classes: PropTypes.object
    };

    render() {
        const { classes, data } = this.props;
        return (
            <Main className={classes.root} title="Documentation">
                <article>
                    <Secuence stagger>
                        <div className={ classes.faq }>
                            { data.allMarkdownRemark.edges.map((n, d) => {
                                return (
                                    <Fader key={ 'docs-' + d }className={ classes.item }>
                                        <Frame type="frame_a" linkText="More.." linkUrl={n.node.fields.slug}>
                                            <h4 className={ classes.question }><Text>{ n.node.frontmatter.title }</Text></h4>
                                            <div className={ classes.answer }><Text>{ n.node.excerpt }</Text></div>
                                        </Frame>
                                    </Fader>
                                )
                            }) }
                        </div>
                        <Donation />
                    </Secuence>
                </article>
            </Main>
        );
    }
}

export default withStyles(styles)(Documentation);

export const documentationQuery = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        excerpt
        fields {
            slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`;
