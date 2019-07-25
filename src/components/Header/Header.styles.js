const styles = theme => ({
    root: {
        position: 'relative',
        display: 'block',
        margin: [0, 'auto', 10],
        width: '100%'
    },
    svg: {
        display: 'block',
        position: 'absolute',
        left: 'calc(50% - 700px)',
        top: 5,
        width: 1400,
        height: 71,
        opacity: 1
    },
    path: {
        opacity: 0,
        fill: 'none',
        stroke: theme.color.gradient.orange_one,
        //stroke: theme.color.secondary.light,
        strokeWidth: 1.4,
        vectorEffect: 'non-scaling-stroke'
    },
    content: {
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        margin: [0, 'auto'],
        padding: [20, 20, 10],
        width: '100%',
        maxWidth: 1000
    },
    logo: {
        width: 120,
        marginLeft: 15
    },
    menu: {
        width: '100%',
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,
        userSelect: 'none'
    },
    item: {
        display: 'block',
        padding: 2,
        lineHeight: 1,
        fontSize: 13,
        textAlign: 'center',
        textTransform: 'uppercase',
        textShadow: `0 0 5px ${theme.color.secondary.main}`,
        fontFamily: theme.typography.primary,
        color: theme.color.text.main,
        whiteSpace: 'nowrap'
    },
    divisor: {
        color: theme.color.tertiary.main,
        textShadow: `0 0 5px ${theme.color.tertiary.main}`,
        fontSize: 20,
        fontWeight: 100,
        transform: 'scale(1, 0)',
        transformOrigin: 'center center'
    },
    '@media screen and (min-width: 768px)': {
        root: {
            marginBottom: 20
        },
        content: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: [20, 20, 30]
        },
        menu: {
            margin: 0
        }
    },

    '@media screen and (max-width: 800px)': {
        content: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        menu: {
            marginTop: 20,
            justifyContent: 'center'
        },
        svg: {
            left: 'calc(50vw - 290px)'
        }
    },

    '@media screen and (max-width: 997px) and (min-width: 800px)': {
        svg: {
            left: '-185px'
        }
    },

    '@media screen and (min-width: 1025px)': {
        menu: {
            margin: 0,
            maxWidth: 'none'
        }
    }
});

export { styles };
