import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Link } from '../components/Link';
import { Secuence } from '../components/Secuence';
import { Frame } from '../components/Frame';
import { Donation } from '../components/Donation';

const styles = theme => ({
    root: {
        flex: 1,
        display: 'flex'
    },
    container: {
        minHeight: 300,
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },
    frame: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    inner: {
        width: 200,
        margin: [0, 'auto', 54]
    },
    main: {
        margin: 'auto',
        textAlign: 'center',
        width: 400
    }
});

class NotFound extends React.PureComponent {
    onStart = () => {
        this.secuenceElement.exit();
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <main className={classes.main}>
                    <Secuence ref={ref => (this.secuenceElement = ref)}>
                        <Frame className={classes.container}
                               classes={classes}
                               type="frame_a"
                               audio={{ silent: false }}
                               linkText='Go to Start'
                               linkUrl='/'
                               onLink={this.onStart}>
                            <h1><Text>Not found</Text></h1>
                            <p><Text>The location you are looking for was not found in the system.</Text></p>
                        </Frame>
                        <Donation />
                    </Secuence>
                </main>
            </div>
        );
    }
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
