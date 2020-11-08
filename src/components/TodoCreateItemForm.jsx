import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { IconButton, InputBase, Paper, withStyles } from '@material-ui/core'
import { Send as SendIcon } from '@material-ui/icons/'

import { createItem, onChangeInputContent } from '../redux/actions/todo'

const todoCreateItemFormStyles = theme => ({
  todoCreateItemForm: theme.mixins.flexy(undefined, 'space-between'),
  inputWrapper: {
    paddingLeft: theme.spacing(3),
    backgroundColor: theme.palette.background.input,
    flexGrow: 1,
    '&:hover': {
      backgroundColor: theme.mixins.convertToRGB(theme.palette.background.input, 0.8)
    }
  },
  inputCreateItem: {
    height: '100%'
  }
})

const TodoCreateItemForm = ({ classes, createItem, inputContent, onChangeInputContent }) => {
  const inputElement = useRef(null);

  const onCreateItem = () => {
    createItem(inputContent)
    inputElement.current.focus()
  }

  return <>
    <Paper
      className={classes.todoCreateItemForm}
      variant="outlined"
    >
      <InputBase
        classes={{ input: classes.inputCreateItem }}
        className={classes.inputWrapper}
        inputProps={{
          'aria-label': 'Create item',
          autoFocus: true,
          spellCheck: false,
          onKeyDown: (e) => e.key === 'Enter' && onCreateItem()
        }}
        placeholder="Create item"
        onChange={(e) => onChangeInputContent(e.target.value)}
        value={inputContent}
        inputRef={inputElement}
      />

      <IconButton
        color="primary"
        onClick={onCreateItem}
        aria-label="Create item"
        disabled={inputContent.trim() === ''}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  </>
}

const mapStateToProps = ({ todoList: { inputContent } }) => ({ inputContent })
export default connect(mapStateToProps, { createItem, onChangeInputContent })(withStyles(todoCreateItemFormStyles)(TodoCreateItemForm))