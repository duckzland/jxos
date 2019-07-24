import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { rgba } from 'polished';
import anime from 'animejs';
import { getPathLength } from '../../tools/general';

import { getViewportRange } from '../../tools/viewport';
import { Secuence } from '../Secuence';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Link } from '../Link';

class Component extends React.Component {
    static displayName = 'Header';

    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        energy: PropTypes.object.isRequired,
        audio: PropTypes.object.isRequired,
        sounds: PropTypes.object.isRequired,
        className: PropTypes.any,
        children: PropTypes.any
    };

    constructor() {
        super(...arguments);

        this.state = {
            show: false
        };

        const { energy } = this.props;
        const durationEnter = this.getDurationEnter();

        energy.updateDuration({enter: durationEnter});
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        this.stop();
        window.removeEventListener('resize', this.onResize);
    }

    onResize = () => {
        this.reset();
    }

    getDurationEnter() {
        const { theme } = this.props;
        const { small, medium } = getViewportRange();
        return (small || medium ? 2 : 4) * theme.animation.time;
    }

    playSound() {
        const { sounds } = this.props;

        if (!sounds.deploy.playing()) {
            sounds.deploy.play();
        }
    }

    stopSound() {
        const { sounds } = this.props;
        sounds.deploy.stop();
    }

    enter() {
        const { energy } = this.props;
        const duration = this.getDurationEnter();
        const paths = this.svgElement  ? this.svgElement.querySelectorAll('path') : false;

        this.playSound();
        //this.setState({show: true});
        anime({
            targets: this.element,
            translateY: ['-100%', 0],
            easing: 'easeOutCubic',
            duration,
            complete: () => this.stopSound()
        });

        if (paths) {
            anime.set(paths, {
                strokeDasharray: getPathLength,
                opacity: 1
            });

            anime({
                targets: paths,
                opacity: 1,
                strokeDashoffset: [getPathLength, 0],
                easing: 'easeOutCubic',
                duration: energy.duration.enter * 2
            });
        }

        this.state.show = true;
    }

    exit() {
        const { sounds, energy } = this.props;
        const paths = this.svgElement  ? this.svgElement.querySelectorAll('path') : false;
        const duration = this.getDurationEnter();

        sounds.deploy.play();

        //this.setState({show: false});

        anime({
            targets: this.element,
            translateY: [0, '-100%'],
            easing: 'easeOutCubic',
            duration,
            complete: () => this.stopSound()
        });

        paths && anime({
            targets: paths,
            opacity: 0,
            strokeDashoffset: [0, getPathLength],
            easing: 'easeOutCubic',
            duration: energy.duration.exit
        });

        this.state.show = false;
    }

    stop() {
        anime.remove(this.element);
    }

    reset() {
        const { energy } = this.props;
        const show = energy.entering || energy.entered;

        this.setState({show});

        anime.set(this.element, {translateY: 0});
    }

    render() {
        const { theme, classes, energy, audio, sounds, className, ...etc } = this.props;
        const { show } = this.state;

        return (
            <header className={cx(classes.root, className)}
                    ref={ref => (this.element = ref)}
                    {...etc}>
                <svg className={classes.svg}
                     ref={ref => (this.svgElement = ref)}
                     xmlns="http://www.w3.org/2000/svg"
                     shapeRendering="geometricPrecision"
                     viewBox="0 0 370.417 18.785"
                     preserveAspectRatio="none">
                    <path className={classes.path} d="M48.63 7.396L55.013.333l5.822-.029"/>
                    <path className={classes.path} d="M370.384 16.748l-202.985.28-6.896-6.95-52.339.296-5.949-8.414-46.376.152-6.47 7.484L0 9.58"/>
                    <path className={classes.path} d="M50.294 11.056l6.793 7.465 43.286-.059 6.712-7.03"/>
                    <path className={classes.path} d="M163.293 9.994l5.182 5.259 5.821.029"/>
                    <path className={classes.path} d="M103.123 18.123l5.45-6.061 5.821-.029"/>
                    <path className={classes.path} d="M104.855 2.858l4.195 6.066 10.41-.037"/>
                    <path className={classes.path} d="M54.689 18.154l-6.385-7.063-5.822-.03"/>
                </svg>
                <div className={classes.content}>
                    <Secuence animation={{ show, independent: true }}>
                        <Link href="/">
                            <Logo className={classes.logo} classes={classes}/>
                        </Link>
                        <Menu className={classes.menu} classes={classes}/>
                    </Secuence>
                </div>
            </header>
        );
    }
}

export { Component };
