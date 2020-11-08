import React from 'react'
import { connect } from 'react-redux'
import { Box, Typography, withStyles } from "@material-ui/core"

const headerStyles = theme => ({
  header: {
    marginTop: theme.spacing(5)
  }
})

const Header = ({ classes, title }) => {
  return <Box className={classes.header}>
    <Typography variant="h1">{title}</Typography>
  </Box>
}

const mapStateToProps = ({ todoList: { title } }) => ({ title })
export default connect(mapStateToProps)(withStyles(headerStyles)(Header))