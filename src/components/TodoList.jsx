import React from 'react'
import { connect } from 'react-redux'
import { Box, Typography, withStyles } from '@material-ui/core'

import TodoItem from './TodoItem'

const todoListStyles = theme => ({
  todoList: {
    marginTop: theme.spacing(3)
  },
  helperText: {
    paddingLeft: theme.spacing(1)
  }
})

const TodoList = ({ classes, items, numberOfItems }) => (
  <Box className={classes.todoList}>
    {!!numberOfItems && <Typography className={classes.helperText}>
      You have {numberOfItems} items
      </Typography>}
    <Box role="list">
      {items.map(({ content, id }) => <TodoItem content={content} key={id} itemId={id} />)}
    </Box>
  </Box>
)

const mapStateToProps = ({ todoList: { items } }) => ({ items, numberOfItems: items.length })
export default connect(mapStateToProps)(withStyles(todoListStyles)(TodoList))