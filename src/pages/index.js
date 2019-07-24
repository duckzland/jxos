import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Secuence } from '../components/Secuence';
import { Menu } from '../components/Menu';
import { SocialLinks } from '../components/SocialLinks';
import { Legal } from '../components/Legal';
import { Frame } from '../components/Frame';

const styles = theme => {
    return {
        root: {
            margin: 'auto',
            width: '100%',
            maxWidth: '800px'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            margin: [0, 'auto'],
            padding: 20
        },
        brand: {
            margin: [0, 'auto', 30],
            padding: [10, 0],
            width: '100%',
            maxWidth: 400
        },
        menu: {
            margin: [0, 'auto', 20],
            width: '100%',
            maxWidth: 600
        },
        social: {
            margin: [0, 'auto'],
            width: '100%',
            maxWidth: 350
        },
        legal: {
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)'
        }
    };
};

class Component extends React.Component {
    onLinkStart = (event, { isInternal }) => {
        if (isInternal) {
            this.secuenceElement.exit();
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <Secuence ref={ref => (this.secuenceElement = ref)}>
                <div className={classes.root}>
                    <div className={classes.brand}>
                        <Frame type="frame_a" audio={{ silent: false }} logo={true}/>
                    </div>
                    <div className={classes.content}>
                        <Menu className={classes.menu}
                              animation={{ duration: { enter: 400 } }}
                              scheme='expand'
                              onLinkStart={this.onLinkStart} />

                        { false && <SocialLinks className={classes.social} onLinkStart={this.onLinkStart} /> }
                    </div>
                    <Legal className={classes.legal} opaque onLinkStart={this.onLinkStart} />
                </div>
            </Secuence>
        );
    }
}

Component.propTypes = {
    classes: PropTypes.any.isRequired
};

export default withStyles(styles)(Component);
