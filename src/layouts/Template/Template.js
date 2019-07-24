import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from '../../components/Layout';
import { Background } from '../../components/Background';
import { App } from '../../components/App';

class Component extends React.Component {
    static displayName = 'Template';

    static propTypes = {
        location: PropTypes.object.isRequired,
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        layout: PropTypes.object,
        background: PropTypes.object,
        children: PropTypes.any
    };

    static defaultProps = {
        layout: {},
        background: {}
    };

    render() {
        const { location, classes, layout, background, children } = this.props;
        const { animation } = background;
        const isURLContent = location.pathname !== '/';
        const bgShow = true;

        return (
            <Layout {...layout}>
                <svg width="0" height="0" shapeRendering="geometricPrecision">
                    <defs>
                        <linearGradient id="orange-one" x1="0%" y1="0" x2="100%" y2="100%">
                            <stop offset="0%" className="stop-one" stopColor="#ff7900"></stop>
                            <stop offset="50%" className="stop-two" stopColor="#ffb079"></stop>
                            <stop offset="100%" className="stop-two" stopColor="#ff4f00"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <Background {...background} animation={{ bgShow, ...animation }} >
                    {isURLContent ? <App>{children}</App> : children}
                </Background>
            </Layout>
        );
    }
}

export { Component };
