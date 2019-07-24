import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { rgba } from 'polished';
import anime from 'animejs';
import { getPathLength } from '../../tools/general';

import { getViewportRange } from '../../tools/viewport';
import { Secuence } from '../Secuence';
import { SocialLinks } from '../SocialLinks';
import { Legal } from '../Legal';

class Component extends React.PureComponent {
    static displayName = 'Footer';

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
            show: false,
            shapes: []
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
        this.setState({show: true});

        anime({
            targets: this.element,
            translateY: ['100%', 0],
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
                strokeDashoffset: [getPathLength, 0],
                easing: 'easeOutCubic',
                duration: energy.duration.enter * 2
            });
        }
    }

    exit() {
        const { energy, sounds } = this.props;
        const paths = this.svgElement  ? this.svgElement.querySelectorAll('path') : false;

        sounds.deploy.play();

        this.setState({show: false});

        paths && anime({
            targets: paths,
            opacity: 0,
            strokeDashoffset: [0, getPathLength],
            easing: 'easeOutCubic',
            duration: energy.duration.exit
        });
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
            <footer
                className={cx(classes.root, className)}
                ref={ref => (this.element = ref)}
                {...etc}
                >
                <svg className={classes.svg}
                     ref={ref => (this.svgElement = ref)}
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox="0 0 370.417 17.462"
                     preserveAspectRatio="none">
                    <path className={classes.path}
                          d="M0 16.917l202.985.28 6.897-6.95 52.338.295 5.949-8.413 46.376.152 6.47 7.484 49.369-.016"/>
                    <path className={classes.path}
                          d="M265.356 2.89l-4.195 6.065-10.41-.036M321.75 7.585L315.364.522l-5.822-.029M207.086 10.712l-5.182 5.259-5.822.029"/>
                </svg>
                <div className={classes.content}>
                    <Secuence animation={{ show, independent: true }}>
                        <Legal className={classes.legal} />
                        <SocialLinks className={classes.socialLinks} itemClassName={classes.socialLinksItem} animateY={false}/>
                    </Secuence>
                </div>
            </footer>
        );
    }
}

export { Component };
