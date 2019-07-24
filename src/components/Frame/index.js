import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Frame';
import { styles } from './Frame.styles';

const Frame = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { Frame };
