import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

class Component extends React.Component {
    static displayName = 'Logo';

    static propTypes = {
        theme: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        energy: PropTypes.object.isRequired,
        className: PropTypes.any,
        hover: PropTypes.bool,
        stableTime: PropTypes.bool
    };

    constructor() {
        super(...arguments);

        const { energy, stableTime } = this.props;

        if (!stableTime) {
            energy.updateDuration({enter: 820});
        }
    }

    componentWillUnmount() {
        const paths = this.svgElement.querySelectorAll('path');
        anime.remove(paths);
    }

    enter() {
        const { energy, stableTime } = this.props;
        const paths = this.svgElement.querySelectorAll('path');

        anime.set(this.svgElement, {fillOpacity: '0'});

        anime({
            targets: paths,
            fillOpacity: '1',
            easing: 'linear',
            delay: (path, index) => stableTime ? 0 : index * energy.duration.stagger,
            duration: path => stableTime ? energy.duration.enter : path.getTotalLength(),
            complete: () => {
            }
        });
    }

    exit() {
        const { energy } = this.props;
        const paths = this.svgElement.querySelectorAll('path');

        anime({
            targets: this.svgElement,
            easing: 'easeInCubic',
            duration: energy.duration.exit,
            opacity: 0
        });

        anime({
            targets: paths,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'linear',
            direction: 'reverse',
            duration: energy.duration.exit,
            complete: () => {
                anime.set(this.svgElement, {opacity: 0});
            }
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <svg className={classes.logo}
                 ref={ref => (this.svgElement = ref)}
                 viewBox="0 0 318.546 123.272"
                 xmlns='http://www.w3.org/2000/svg'
                 preserveAspectRatio='none'>
                <path className={classes.orange} d="M46.546 13.272v68.673c0 4.261-1.491 7.663-4.475 10.202-2.984 2.448-6.763 3.673-11.338 3.673-4.675 0-8.555-1.273-11.638-3.812-2.984-2.63-4.475-5.983-4.475-10.063v-3.673H0v2.856c0 4.443.746 8.342 2.238 11.697 4.476 10.064 13.576 15.097 27.301 15.097h1.344c8.851 0 16.012-2.268 21.482-6.801 5.868-4.714 8.8-11.379 8.8-19.992V13.273z"/>
                <path className={classes.orange} d="M105.871 69.995l-29.09 38.277H60.518l37.296-49.234-33.864-45.766h17.603l25.063 33.978q5.222-6.796 9.846-12.898 4.625-6.24 8.056-10.818 3.58-4.715 5.669-7.49l2.088-2.773h16.261l-2.834 3.745q-4.923 6.657-14.77 19.693-9.845 12.898-16.26 21.496l37.146 50.066h-17.604z"/>

                <path className={classes.white} d="M177.324 6.143q-7.074 0-11.254 6.143-4.148 6.144-4.148 16.744 0 10.563 4.148 16.707 4.18 6.144 11.254 6.144t11.19-6.144q4.148-6.143 4.148-16.707 0-10.6-4.148-16.744-4.116-6.143-11.19-6.143zm0-6.143q10.097 0 16.142 7.904 6.045 7.866 6.045 21.127 0 13.223-6.045 21.127-6.045 7.866-16.142 7.866-10.129 0-16.206-7.866-6.045-7.867-6.045-21.127 0-13.26 6.045-21.127Q167.195 0 177.324 0z"/>
                <path className={classes.white} d="M195.074 67.46v7.464q-4.17-2.084-7.867-3.107t-7.143-1.023q-5.982 0-9.245 2.425-3.227 2.425-3.227 6.896 0 3.752 2.14 5.684 2.175 1.894 8.193 3.069l4.423.947q8.194 1.63 12.073 5.76 3.916 4.092 3.916 10.988 0 8.222-5.293 12.466-5.257 4.243-15.445 4.243-3.843 0-8.194-.91-4.314-.908-8.955-2.69v-7.88q4.46 2.614 8.738 3.94t8.41 1.326q6.273 0 9.68-2.576t3.409-7.35q0-4.169-2.466-6.518-2.429-2.35-8.012-3.524l-4.46-.91q-8.193-1.704-11.854-5.342-3.662-3.637-3.662-10.117 0-7.502 5.04-11.822 5.075-4.32 13.957-4.32 3.807 0 7.759.72 3.952.72 8.085 2.16z"/>
                <path className={classes.white} d="M205.066 40.654h3.43v-5.8c.914.046 1.22.046 1.55.046 2.058 0 3.302-.275 4.395-1.008 1.27-.871 2.032-2.27 2.032-3.805s-.736-2.889-2.058-3.737c-1.117-.71-2.439-.985-4.7-.985h-4.649zm3.43-8.183v-4.768c1.677.023 1.981.023 2.464.138 1.194.275 1.88 1.1 1.88 2.269 0 .985-.508 1.742-1.422 2.109-.483.206-1.144.275-2.236.275-.153 0-.381 0-.686-.023z"/>
                <path className={classes.white} d="M218.96 40.654h10.137v-2.499h-6.707v-4.08h6.046v-2.498h-6.046v-3.713h6.605v-2.499H218.96z"/>
                <path className={classes.white} d="M232.61 40.654h3.455v-6.35h.813c1.6 0 2.134.39 2.82 2.018l1.855 4.332h3.81l-2.438-5.318c-.712-1.559-1.144-2.017-2.084-2.338 2.16-.275 3.43-1.604 3.43-3.599 0-1.33-.584-2.452-1.651-3.14-.966-.642-2.21-.894-4.446-.894h-5.564zm3.43-8.71v-4.195h1.804c1.829 0 2.794.688 2.794 1.994 0 1.444-1.041 2.2-3.074 2.2z"/>
                <path className={classes.white} d="M245.94 40.654h3.531l1.448-3.484h7.012l1.474 3.484h3.735l-6.784-15.29h-3.81zm6.021-5.983l2.033-5.157c.102-.275.152-.413.254-.802l.127-.459c.127.459.178.62.33 1.009l2.185 5.41z"/>
                <path className={classes.white} d="M266.99 40.654h3.43v-12.79h4.878v-2.499h-13.135v2.499h4.827z"/>
                <path className={classes.white} d="M277.74 40.654h3.43v-15.29h-3.43z"/>
                <path className={classes.white} d="M285.35 40.654h3.252v-8c0-.985-.153-2.452-.381-3.942.508 1.146.864 1.81 1.397 2.704l5.539 9.238h4.14v-15.29h-3.251v8.207c0 1.512 0 1.581.178 2.934.025.137.075.458.102.825-.102-.275-.229-.527-.254-.62-.305-.755-.407-1.1-1.017-2.085l-5.665-9.26h-4.04z"/>
                <path className={classes.white} d="M317.36 31.783h-6.86v2.499h3.608v3.713c-.864.252-1.321.32-2.109.32-3.48 0-5.741-2.108-5.741-5.363 0-3.278 2.21-5.226 5.92-5.226 1.65 0 3.023.252 4.496.848l.229-2.704a17.083 17.083 0 0 0-4.675-.62c-5.92 0-9.603 2.935-9.603 7.68 0 2.475.99 4.744 2.642 6.05 1.473 1.17 3.658 1.789 6.402 1.789 2.109 0 3.963-.253 5.691-.803z"/>
                <path className={classes.white} d="M209.444 97.723h3.2v-5.711l5.715-8.399h-3.415l-3.461 5.289c-.19.296-.285.444-.356.634a4.813 4.813 0 0 0-.356-.677l-3.39-5.246h-3.723l5.786 8.462z"/>
                <path className={classes.white} d="M219.83 97.383c1.446.466 2.584.656 4.078.656 3.675 0 5.927-1.671 5.927-4.421 0-2.031-1.138-3.258-3.912-4.231-1.73-.614-1.73-.614-2.158-.825-.664-.339-.972-.783-.972-1.396 0-1.037.972-1.693 2.514-1.693 1.09 0 2.039.212 3.295.698l.261-2.327c-1.21-.38-2.371-.55-3.746-.55-3.533 0-5.596 1.523-5.596 4.147 0 1.205.45 2.136 1.399 2.834.735.55 1.304.825 2.94 1.397 1.162.423 1.446.55 1.826.782.498.296.759.783.759 1.354 0 1.206-1.067 1.967-2.774 1.967-1.186 0-2.3-.296-3.557-.93z"/>
                <path className={classes.white} d="M235.615 97.723h3.2V85.92h4.553v-2.306h-12.259v2.306h4.505z"/>
                <path className={classes.white} d="M245.482 97.723h9.46v-2.306h-6.26v-3.765h5.644v-2.306h-5.643V85.92h6.164v-2.306h-9.365z"/>
                <path className={classes.white} d="M258.218 97.723h3.035v-8.462c0-.91-.119-2.644-.237-3.68h.095c.355 1.226.64 2.115 1.09 3.3l3.415 8.842h2.94l4.03-10.683c.214-.55.285-.783.475-1.46h.095c-.07.91-.213 2.18-.213 3.808v8.335h3.2v-14.11h-5.12l-3.036 8.017a16.635 16.635 0 0 0-.711 2.327c-.023.085-.048.254-.119.53-.284-1.355-.474-2.074-1.02-3.47l-2.868-7.404h-5.05z"/>
                <path className={classes.orange} d="M204.982 12.836h113.57v4.009h-113.57z"/>
                <path className={classes.orange} d="M204.982 104.263h113.57v4.009h-113.57z"/>
            </svg>
        );
    }
}

export { Component };
