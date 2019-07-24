import { rgba } from 'polished';
const styles = theme => ({
    orange: {
        fill: theme.color.secondary.main,
        fillOpacity: '0',
        stroke: "none",
        shapeRendering: 'geometricPrecision'
    },
    white: {
        fill: theme.color.primary.light,
        fillOpacity: '0',
        stroke: "none",
        shapeRendering: 'geometricPrecision'
    }
});

export { styles };
