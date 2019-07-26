const styles = theme => ({
    root: {
        display: 'flex',
        margin: [0, 'auto'],
        maxWidth: 300,
        userSelect: 'none'
    },
    barcode: {
        width: 80,
        height: 80,
        padding: [ 0, 13, 0, 0]
    },
    header: {
        fontSize: 14,
        color: theme.color.text.main,
        margin: [0, 0, 5]
    },
    address: {
        fontSize: 13,
        color: theme.color.text.main,
        wordBreak: 'break-all',
        margin: 0
    }
});

export { styles };
