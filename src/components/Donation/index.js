import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Donation';
import { styles } from './Donation.styles';

const Donation = withAnimation({ flow: false })(withStyles(styles)(withSounds()(Component)));

export { Donation };
