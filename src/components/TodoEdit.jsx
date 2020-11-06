import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dialog, DialogContent, DialogActions, Button, TextField } from '@material-ui/core'

import { selectorItemById } from '../redux/reducers/todo'
import { updateItem } from '../redux/actions/todo'

const TodoEdit = ({ item, updateItem, history }) => {
  const [newItem, setNewItem] = useState(item)

  if (!item) return null

  const handleUpdateItem = () => {
    if (!newItem.content.trim() || newItem.content.trim() === item.content) return 
    updateItem(newItem)
    history.push('/')
  }

  return <>
      <Dialog
        fullWidth
        maxWidth="sm"
        open
        onClose={() => history.push('/')}
      >
        <DialogContent>
          <TextField 
            autoFocus
            value={newItem.content}
            onChange={(e) => setNewItem({ ...newItem, content: e.target.value })}
            inputProps={{ 
              'aria-label': 'Edit item',
              spellCheck: false, 
              onKeyDown: (e) => e.key === 'Enter' && handleUpdateItem() 
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateItem} color="primary">
            Save
          </Button>
          <Button onClick={() => history.push('/')} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  </>
}

const mapStateToProps = ({ todoList: { items }}, props) => ({ item: selectorItemById(items, props) })

export default connect(mapStateToProps, { updateItem })(withRouter(TodoEdit))