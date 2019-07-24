const styles = theme => ({
    root: {
        position: 'relative',
        marginTop: 10
    },
    svg: {
        display: 'block',
        position: 'absolute',
        left: 'calc(50% - 700px)',
        top: -13,
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
        padding: [20, 10, 10],
        maxWidth: 1000,
        margin: [0, 'auto'],
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    socialLinks: {
        maxWidth: 400,
        alignSelf: 'flex-end'
    },
    socialLinksItem: {
        padding: 0,
        height: 20,
        fontSize: 20
    },
    legal: {
        padding: 0,
        maxWidth: 400,
        fontSize: 12,
        alignSelf: 'flex-start'
    },

    '@media screen and (min-width: 768px)': {
        root: {
            marginTop: 20
        },
        content: {
            padding: [30, 20, 20]
        },
        socialLinks: {
            marginBottom: 20
        },
        socialLinksItem: {
            height: 24,
            fontSize: 24
        },
        legal: {
            fontSize: 14
        }
    },

    '@media screen and (max-width: 997px)': {
        svg: {
            left: '-185px'
        }
    }
});

export { styles };
