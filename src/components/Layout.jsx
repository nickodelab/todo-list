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

const Layout = ({ classes, children }) => <>
	<AppBar position="static">
		<Toolbar></Toolbar>
	</AppBar>
	<Container className={classes.mainContent} maxWidth="sm">
		{children}
	</Container>
</>

export default withStyles(layoutStyles)(Layout)