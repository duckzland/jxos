import { rgba } from 'polished';

const styles = theme => ({
    logo: {
        display: 'block',
        width: '69%',
        height: '69%',
        paddingLeft: '20px',
        paddingRight: '20px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    root: {
        position: 'relative',
        display: 'inline-block',
        userSelect: 'none'
    },
    frame: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    svg_frame_a: {
        display: 'block',
        width: '100%',
        height: 'calc(100% + 69px)',
        marginTop: '-37px',
        shapeRendering: 'geometricPrecision'
    },
    svg_frame_b: {
        display: 'block',
        width: '100%',
        height: '100%',
        shapeRendering: 'geometricPrecision'
    },
    svg_frame_c: {
        display: 'block',
        width: '100%',
        height: '100%',
        shapeRendering: 'geometricPrecision'
    },
    svg_frame_d: {
        display: 'block',
        width: '100%',
        height: '100%',
        shapeRendering: 'geometricPrecision'
    },
    frame_a: {
        opacity: 0,
        fill: 'none',
        //stroke: theme.color.secondary.light,
        stroke: theme.color.gradient.orange_one,
        strokeWidth: 1.4,
        vectorEffect: 'non-scaling-stroke'
    },
    frame_b: {
        opacity: 0,
        fill: 'none',
        //stroke: theme.color.secondary.light,
        stroke: theme.color.gradient.orange_one,
        strokeWidth: 1.4,
        vectorEffect: 'non-scaling-stroke'
    },
    frame_c: {
        opacity: 0,
        fill: 'none',
        //stroke: theme.color.secondary.light,
        stroke: theme.color.gradient.orange_one,
        strokeWidth: 1.4,
        vectorEffect: 'non-scaling-stroke'
    },
    frame_d: {
        opacity: 0,
        fill: 'none',
        //stroke: theme.color.secondary.light,
        stroke: theme.color.gradient.orange_one,
        strokeWidth: 1.4,
        vectorEffect: 'non-scaling-stroke'
    },
    main: {
        position: 'relative',
        padding: 20
    },
    inner: {
        marginBottom: 20,
        color: theme.color.text.main
    },
    message: {
        marginBottom: 20,
        color: theme.color.text.main,
        textAlign: 'center'
    },
    link: {
        textAlign: 'center'
    },
    options: {
        textAlign: 'center'
    },
    option: {
        display: 'inline-block'
    },

    '@media screen and (min-width: 480px)': {
        main: {
            position: 'relative',
            padding: [20, 40]
        }
    }
});

export { styles };
