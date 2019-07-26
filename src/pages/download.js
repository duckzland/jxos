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
    download: {
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
    title: {
        fontSize: 14,
        marginBottom: 10,
        padding: [0, 30, 0, 50],
        lineHeight: '130%'
    },
    description: {
        fontSize: 14,
        padding: [0, 30, 0, 50],
        lineHeight: '130%'
    },
    version: {
        fontSize: 12,
        marginTop: 20,
        textTransform: 'uppercase',
        padding: [0, 30, 0, 50],
        lineHeight: '130%'
    },
    action: {
        fontSize: 12,
        padding: [0, 30, 0, 50],
        lineHeight: '130%',
        margin: [20, 0],
        textTransform: 'uppercase',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

class Download extends React.Component {
    static propTypes = {
        classes: PropTypes.object
    };

    render() {
        const { classes, data } = this.props;
        return (
            <Main className={classes.root} title="Download Files">
                <article>
                    <Secuence stagger>
                        <div className={ classes.download }>
                            { data.allDownloadYaml.edges.map((n, d) => {
                                return (
                                    <Fader key={ 'download-' + d } className={ classes.item }>
                                        <Frame type="frame_a">
                                            <h4 className={ classes.title }><Text>{ n.node.title }</Text></h4>
                                            <div className={ classes.description }><Text>{ n.node.description }</Text></div>
                                            <div className={ classes.version }><Text>{ 'Version:' + n.node.version }</Text></div>
                                            <div className={ classes.action }>
                                                <Link target="_blank" href={n.node.project}><Text>View Project</Text></Link>
                                                <Link target="_blank" href={n.node.url}><Text>Download</Text></Link>
                                            </div>
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

export default withStyles(styles)(Download);

export const downloadQuery = graphql`
{
  allDownloadYaml {
    edges {
      node {
        title
        url
        description
        version
        project
      }
    }
  }
}
`;