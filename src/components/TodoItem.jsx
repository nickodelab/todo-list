import React from 'react'
import { Paper, Typography, Grow, withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const todoItemStyles = theme => ({
  todoItem: {
    padding: theme.spacing(2, 1, 2, 3),
    marginTop: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.shadows[1]
    }
  }
})

const TodoItem = ({ classes, content, itemId, history }) => <>
  <Grow in>
    <Paper 
      className={classes.todoItem}
      variant="outlined"
      onClick={() => history.push(`/edit/${itemId}`)}
    >
      <Typography>{content}</Typography>
    </Paper>
  </Grow>
</>

export default withStyles(todoItemStyles)(withRouter(TodoItem))