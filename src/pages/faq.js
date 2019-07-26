import React from 'react';
import PropTypes from 'prop-types';

import { Frame } from '../components/Frame';
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';
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
        padding: [0,0,40,0]
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

class FAQ extends React.Component {
    static propTypes = {
        classes: PropTypes.object
    };

    render() {
        const { classes, data } = this.props;
        return (
            <Main className={classes.root} title="Frequently Asked Questions">
                <article>
                    <Secuence stagger>
                        <div className={ classes.faq }>
                            { data.allFaqYaml.edges.map((n, d) => {
                                return (
                                    <Fader key={ 'faq-' + d } className={ classes.item }>
                                        <Frame type="frame_a">
                                            <h4 className={ classes.question }><Text>{ n.node.q }</Text></h4>
                                            <div className={ classes.answer }><Text>{ n.node.a }</Text></div>
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

export default withStyles(styles)(FAQ);

export const faqQuery = graphql`
{
  allFaqYaml {
    edges {
      node {
        q, a
      }
    }
  }
}
`;
