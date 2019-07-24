import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { AppContent } from '../AppContent';

class Component extends React.Component {
    static displayName = 'Header';

    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        className: PropTypes.any,
        children: PropTypes.any,
        location: PropTypes.any
    };

    state = {
        show: false
    };

    constructor() {
        super(...arguments);

        const prefix = '';
        this.state = {
            show: this.props.location.pathname !== '/' + prefix,
            animate: false,
        };
    }

    componentDidMount() {
        window.addEventListener('route-change-start', this.onRouteChangeStart);
        window.addEventListener('route-change', this.onRouteChange);
    }

    componentWillUnmount() {
        window.removeEventListener('route-change-start', this.onRouteChangeStart);
        window.removeEventListener('route-change', this.onRouteChange);
    }

    onRouteChangeStart = ({ detail: { isInternal, href } }) => {
        if (isInternal && href === '/') {
            this.header.exit();
            this.footer.exit();
            this.state.show = false;
        }
        else {
            this.state.animate = !this.state.show;
            this.state.show = true;
        }
    };

    onRouteChange = () => {
        this.contentElement.scrollTo(0, 0);
        if (this.state.animate) {
            this.header.enter();
            this.footer.enter();
        }
    };

    render() {
        const { theme, classes, className, children, location, ...etc } = this.props;
        const { show  } = this.state;

        return (
            <div className={cx(classes.root, className)} {...etc}>
                { show && <Header className={classes.header} ref={ref => (this.header = ref)}/> }

                <div className={classes.content} ref={ref => (this.contentElement = ref)}>
                    <AppContent>
                        {children}
                    </AppContent>
                    { show && <Footer className={classes.footer} ref={ref => (this.footer = ref)}/> }
                </div>
            </div>
        );
    }
}

export { Component };
