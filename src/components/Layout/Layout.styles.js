import { rgba } from 'polished';

const styles = theme => ({
    '@global': {
        '*, *:before, *:after': {
            boxSizing: 'border-box'
        },
        '::selection': {
            color: theme.color.background.main,
            backgroundColor: theme.color.tertiary.main
        },
        '::-moz-selection': {
            color: theme.color.background.main,
            backgroundColor: theme.color.tertiary.main
        },
        '*': {
            scrollbarWidth: 'thin',
            scrollbarColor: theme.color.tertiary.main + ' ' + theme.color.background.main
        },
        '::-webkit-scrollbar': {
            width: 10,
            height: 10,
            backgroundColor: theme.color.background.main
        },
        '::-webkit-scrollbar-thumb': {
            border: '1px solid ' + theme.color.tertiary.main,
            cursor: 'pointer',

            '&:hover': {
                borderColor: theme.color.secondary.main
            }
        },
        'html, body': {
            margin: 0,
            padding: 0,
            lineHeight: 1.5,
            fontSize: 16,
            fontFamily: theme.typography.secondary,
            color: theme.color.text.main,
            backgroundColor: theme.color.background.main
        },
        a: {
            textDecoration: 'none',
            color: theme.color.link.main,
            outline: 'none',
            transition: `color ${theme.animation.time}ms ease-out`,
            '&:focus': {
                outline: 'none'
            },
            '&:hover, &:focus': {
                color: theme.color.link.light
            }
        },
        'h1, h2, h3, h4, h5, h6': {
            display: 'block',
            margin: [0, 0, 20],
            fontFamily: theme.typography.primary,
            lineHeight: 1,
            color: theme.color.heading.main,
            textShadow: `0 0 5px ${theme.color.secondary.main}`,
            textTransform: 'uppercase'
        },
        h1: {fontSize: 27, marginTop: 20},
        h2: {fontSize: 21, marginTop: 20},
        h3: {fontSize: 18, marginTop: 20},
        h4: {fontSize: 16, marginTop: 20},
        h5: {fontSize: 14, marginTop: 20},
        h6: {fontSize: 13, marginTop: 20},
        'h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child,': {
            marginTop: 0
        },
        p: {
            display: 'block',
            margin: [0, 0, 30]
        },
        img: {
            display: 'block',
            margin: [0, 'auto', 20],
            border: '1px solid ' + rgba(theme.color.secondary.dark, 0.25),
            maxWidth: '100%',
            minHeight: 1,
            verticalAlign: 'top',
            transition: 'border 250ms ease-out',

            '&:hover': {
                border: '1px solid ' + rgba(theme.color.secondary.main, 0.25)
            }
        },
        hr: {
            color: 'transparent',
            margin: [60, 0]
        },
        blockquote: {
            position: 'relative',
            display: 'block',
            margin: [30, 0, 60, 20],
            padding: [0, 40, 0, 40],

            '&::before': {
                content: '"\uF756"', // Quote Close Icon
                position: 'absolute',
                left: 0,
                top: 0,
                display: 'block',
                fontFamily: '"Material Design Icons"',
                lineHeight: 1,
                fontSize: 30,
                fontWeight: 'normal',
                fontStyle: 'normal',
                color: theme.color.secondary.dark,
                transition: 'color 200ms ease-out'
            },
            '&:hover, &:focus': {
                '&::before': {
                    color: theme.color.secondary.main
                }
            }
        },
        ':not(pre) > code[class*="language-"]': {
            fontSize: 12,
            borderWidth: 1,
            padding: [3, 5],
            lineHeight: '14px'
        },
        table: {
            margin: [30,0,60],
            width: '100%'
        },
        tr: {
            borderBottom: '1px solid ' + theme.color.secondary.main
        },
        th: {
            fontWeight: 600,
            textTransform: 'uppercase'
        },
        td: {
            fontSize: 13
        },
        'td, th' : {
            padding: [5, 20, 5, 0],
            borderBottom: '1px solid ' + rgba(theme.color.secondary.main, 0.25)
        }
    }
});

export { styles };
