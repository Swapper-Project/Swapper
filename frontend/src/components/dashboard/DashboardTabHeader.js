import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
	root: {
		maxWidth: '100%',
		height: '10vh',
		minWidth: 250,
		paddingLeft: 20,
		paddingBottom: 20,
		paddingRight: 10,
		backgroundColor: '#f5f5f5',
		margin: 5,
	},
});

class DashboardTabHeader extends Component {
	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<Card className={classes.root} ><h1>Header component</h1>	header text </Card>
			
			</React.Fragment>
		);
	}
}

export default withStyles(useStyles)(DashboardTabHeader);
