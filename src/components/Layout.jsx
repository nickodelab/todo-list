import React from 'react'
import { AppBar, Toolbar, Container, withStyles } from "@material-ui/core"

const layoutStyles = theme => ({
	leftSidebar: {
		margin: theme.spacing(8, 4),
		...theme.mixins.flexy('column wrap', 'center', 'center'),
		height: '100vh'
	},
	mainContent: {
		marginTop: theme.spacing(4)
	}
})

const Layout = ({ classes, children }) => (
	<div>
		<AppBar role="banner" position="static">
			<Toolbar></Toolbar>
		</AppBar>
		<Container className={classes.mainContent} maxWidth="sm">
			{children}
		</Container>
	</div>
)

export default withStyles(layoutStyles)(Layout)