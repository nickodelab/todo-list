import React from 'react'
import { connect } from 'react-redux'
import { Paper, Typography, Grow, withStyles } from '@material-ui/core'

import { onEdit } from '../redux/actions/todo'

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

const TodoItem = ({ classes, content, itemId, onEdit }) => <>
  <Grow in>
    <Paper
      className={classes.todoItem}
      variant="outlined"
      onClick={() => onEdit(itemId)}
      role="listitem"
    >
      <Typography variant="h5">{content}</Typography>
    </Paper>
  </Grow>
</>

export default connect(undefined, { onEdit })(withStyles(todoItemStyles)(TodoItem))