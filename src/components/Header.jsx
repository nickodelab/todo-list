import React from 'react'
import { connect } from 'react-redux'
import { Typography } from "@material-ui/core"

const Header = ({ title }) => {
  return <>
      <Typography variant="h1">{title}</Typography>
  </>
}

const mapStateToProps = ({ todoList: { title }}) => ({ title })
export default connect(mapStateToProps)(Header)