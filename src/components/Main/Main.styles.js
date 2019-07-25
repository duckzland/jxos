import { rgba } from 'polished';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: "column",
        flex: 1,
        position: 'relative',
        margin: [0, 'auto'],
        maxWidth: 1000,
        width: '100%'
    },
    header: {
        textAlign: 'center'
    },
    frame: {
        position: 'absolute',
        zIndex: 1,
        left: 10,
        right: 10,
        top: 0,
        bottom: 0
    },
    content: {
        position: 'relative',
        zIndex: 2,
        flex: 1,
        margin: [0, 10, 10, 20],
        padding: [0, 10, 0, 0],
        maxWidth: 'calc(100% - 30px)',
        overflowX: 'hidden',
        overflowY: 'auto',

        '& > *:last-child, & > article > *:last-child': {
            marginBottom: 0
        }
    },

    '@media screen and (min-width: 768px)': {
        root: {
            minHeight: 1
        },
        frame: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0
        },
        header: {
            fontSize: 26
        },
        content: {
            margin: [0, 40, 30, 50],
            padding: [0, 10, 0, 0],

            '& img': {
                maxWidth: '80%'
            }
        }
    },

    '@media screen and (min-width: 1025px)': {
        content: {
            margin: [0, 60, 50, 70],
            padding: [0, 40, 0, 0]
        }
    }
});

export { styles };
