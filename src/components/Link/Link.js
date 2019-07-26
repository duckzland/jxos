import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import cx from 'classnames';

const checkURLExternal = /^https?:\/\//;

let globalLinkTimeout = null;

class Component extends React.PureComponent {
    static displayName = 'Link';

    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        audio: PropTypes.object.isRequired,
        sounds: PropTypes.object.isRequired,
        className: PropTypes.any,
        activeClassName: PropTypes.any,
        children: PropTypes.any,
        href: PropTypes.string,
        target: PropTypes.string,
        delay: PropTypes.number,
        onClick: PropTypes.func,
        onLinkStart: PropTypes.func,
        onLinkEnd: PropTypes.func
    };

    static defaultProps = {
        activeClassName: 'link-active',
        href: ''
    };

    constructor() {
        super(...arguments);

        this.state = {
            inAction: false
        };
    }

    render() {
        const {
            theme,
            classes,
            audio,
            sounds,
            href,
            target,
            delay,
            className,
            activeClassName,
            children,
            onClick,
            onLinkStart,
            onLinkEnd,
            ...etc
            } = this.props;

        const onLinkTrigger = event => {
            event.preventDefault();
            event.stopPropagation();

            if (this.state.inAction) {
                return false;
            }

            if (href !== '/' && global.location && global.location.pathname.includes(href)) {
                return false;
            }

            if (!href) {
                onClick && onClick(event);
                return false;
            }


            this.state.inAction = true;

            sounds.click.play();

            // TODO: Add support to recognize when the URL ends with / is the same
            // URL as the one without it.

            const { pathname, search } = window.location;
            const isSame = pathname + search === href;
            const isExternalURL = checkURLExternal.test(href);
            const isOut = !!target;
            const isInternal = !isOut && !isSame;
            const linkProps = {href, isOut, isExternalURL, isSame, isInternal};

            if (isSame) {
                this.state.inAction = false;
                return false;
            }

            onClick && onClick(event);
            onLinkStart && onLinkStart(event, linkProps);

            const routeChangeStartEvent = new CustomEvent('route-change-start', {detail: linkProps});
            window.dispatchEvent(routeChangeStartEvent);

            const timeout = delay || theme.animation.time;

            clearTimeout(globalLinkTimeout);
            globalLinkTimeout = setTimeout(() => {
                if (target) {
                    window.open(href);
                }

                else if (isExternalURL) {
                    window.location.href = href;
                }

                else {
                    navigate(href, {}, true);
                }

                onLinkEnd && onLinkEnd(event, linkProps);

                const routeChangeEndEvent = new CustomEvent('route-change-end', {detail: linkProps});
                window.dispatchEvent(routeChangeEndEvent);

                this.state.inAction = false;
            }, timeout);
        };

        const linkMatchesURL = global.location && global.location.pathname.includes(href);

        return (
            <a  {...etc}
                className={cx(className, linkMatchesURL && activeClassName)}
                href={linkMatchesURL ? null : href}
                target={target}
                onClick={onLinkTrigger}>
                {children}
            </a>
        );
    }
}

export { Component };
