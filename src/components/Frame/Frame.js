import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';
import { Logo } from '../Logo';
import { Text } from '../Text';
import { Button } from '../Button';
import { Secuence } from '../Secuence';
import { getPathLength } from '../../tools/general';

class Component extends React.Component {
    static displayName = 'Frame';

    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        energy: PropTypes.object.isRequired,
        audio: PropTypes.object.isRequired,
        sounds: PropTypes.object.isRequired,
        className: PropTypes.any,
        message: PropTypes.any,
        option: PropTypes.string,
        logo: PropTypes.bool,
        type: PropTypes.string.isRequired,
        linkText: PropTypes.string,
        linkUrl: PropTypes.string,
        onLink: PropTypes.func,
        onOption: PropTypes.func
    };

    static defaultProps = {
        logo: false,
        option: '',
        message: '',
        linkText: '',
        linkUrl: ''
    };

    enter() {
        const { energy } = this.props;
        const paths = this.svgElement  ? this.svgElement.querySelectorAll('path') : false;

        if (paths) {
            anime.set(paths, {
                strokeDasharray: getPathLength,
                opacity: 1
            });
            anime({
                targets: paths,
                strokeDashoffset: [getPathLength, 0],
                easing: 'easeOutCubic',
                duration: energy.duration.enter * 5
            });
        }
    }

    exit() {
        const { energy } = this.props;
        const paths = this.svgElement  ? this.svgElement.querySelectorAll('path') : false;

        paths && anime({
            targets: paths,
            opacity: 0,
            strokeDashoffset: [0, getPathLength],
            easing: 'easeOutCubic',
            duration: energy.duration.exit
        });
    }

    getFrame(type) {

        const { classes } = this.props;

        switch (type) {
            case 'frame_a':
                return (<svg className={classes['svg_' + type]}
                             ref={ref => (this.svgElement = ref)}
                             viewBox="0 0 103.842 73.233"
                             xmlns='http://www.w3.org/2000/svg'
                             preserveAspectRatio="none">
                        <path className={classes[type]} d="M93.576 8.688l10.001 4.48-.142 43.113c-3.888 1.907-6.873 3.43-9.859 4.953"/>
                        <path className={classes[type]} d="M16.727 54.134l6.178 15.47 59.348-.01 6.388-13.868 7.99-2.654-.188-21.507"/>
                        <path className={classes[type]} d="M14.168 10.46L.266 14.808l.201 42.177 14.507 3.913"/>
                        <path className={classes[type]} d="M92.01 15.495l6.517 2.277v9.895l-6.008 2.199M7.975 38.303V18.144l8.463-2.688L22.08 4.033l62.853.009 7.077 11.453"/>
                        <path className={classes[type]} d="M16.438 37.553L5.155 40.806v11.552l9.873 1.93"/>
                        <path className={classes[type]} d="M57.34 72.969H86.11l2.26-4.47"/>
                        <path className={classes[type]} d="M47.467 .265 L18.7 .265 16.438 4.83"/>
                    </svg>);

            case 'frame_b':
                return (<svg className={classes['svg_' + type]}
                             ref={ref => (this.svgElement = ref)}
                             viewBox='0 0 100 40'
                             xmlns='http://www.w3.org/2000/svg'
                             preserveAspectRatio="none">
                    <path className={classes[type]} d='M0,10 L0,0 L10,0'/>
                    <path className={classes[type]} d='M90,0 L100,0 L100,10'/>
                    <path className={classes[type]} d='M10,40 L0,40 L0,30'/>
                    <path className={classes[type]} d='M100,30 L100,40 L90,40'/>
                </svg>);

            case 'frame_c':
                return (<svg className={classes['svg_' + type]}
                             ref={ref => (this.svgElement = ref)}
                             viewBox="0 0 181.429 8.462"
                             xmlns='http://www.w3.org/2000/svg'
                             preserveAspectRatio="none">
                    <path className={classes[type]} d="M181.25 8.267l-7.3-6.635-165.842.05-7.94 6.554"/>
                    <path className={classes[type]} d="M2.458 4.535L7.562.325l7.256-.06"/>
                    <path className={classes[type]} d="M166.701 3.042l6.617-.032 5.457 5.01"/>
                </svg>);

            case 'frame_d':
                return (<svg className={classes['svg_' + type]}
                             ref={ref => (this.svgElement = ref)}
                             viewBox="0 0 181.429 8.462"
                             xmlns='http://www.w3.org/2000/svg'
                             preserveAspectRatio="none">
                    <path className={classes[type]} d="M181.25.196l-7.3 6.634L8.107 6.78.168.227"/>
                    <path className={classes[type]} d="M2.458 3.927l5.104 4.21 7.256.06"/>
                    <path className={classes[type]} d="M166.701 5.42l6.617.033 5.457-5.011"/>
                </svg>);
        }

    }


    render() {
        const { theme, classes, energy, audio, sounds, className, message, option, onOption, logo, type, children, linkText, linkUrl, onLink, ...etc } = this.props;
        const hasContent = logo || (message.length > 0) || (option.length > 0) || (children && (children.length > 0)) || (linkText.length > 0) || (linkUrl.length > 0);
        const frame = this.getFrame(type);
        return (
            <div className={cx(classes.root, className)} {...etc}>
                <div className={classes.frame}>
                    { frame }
                </div>
                { hasContent && <div className={classes.main}>
                    <Secuence>
                        { logo && <Logo className={classes.logo} classes={classes}/> }
                        { message && <div className={classes.message}>
                            <Text audio={audio}
                                  animation={{ animate: energy.animate }}>
                                { message }
                            </Text>
                        </div> }
                        { (children) && <div className={classes.inner}>{ children }</div> }
                        { option && <div className={classes.options}>
                            <Button type="button" className={classes.option}
                                    audio={audio}
                                    animation={{ animate: energy.animate }}
                                    onClick={onOption}>
                                {option}
                            </Button>
                        </div> }
                        { linkText && linkUrl && <div className={classes.link}>
                            <Link href={linkUrl}>
                                <Button type="button" onClick={onLink}>{linkText}</Button>
                            </Link>
                        </div> }
                    </Secuence>
                </div> }
            </div>
        );
    }
}

export { Component };
