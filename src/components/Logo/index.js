import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { Component } from './Logo';
import { styles } from './Logo.styles';

const Logo = withStyles(styles)(withAnimation()(Component));

export { Logo };
