import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, TextField, Card, CardActions, CardContent, CardHeader } from '@material-ui/core'

import { selectorItemById } from '../redux/reducers/todo'
import { updateItem, onEdit } from '../redux/actions/todo'

const TodoEdit = ({ item, updateItem, onEdit }) => {
  const [newItem, setNewItem] = useState(item)

  if (!item) return null

  const handleUpdateItem = () => {
    if (!newItem.content.trim() || newItem.content.trim() === item.content) return
    updateItem(newItem)
    onEdit(undefined)
  }

  return <>
    <Card variant="outlined">
      <CardHeader title="Edit Item" />
      <CardContent>
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
      </CardContent>
      <CardActions>
        <Button onClick={handleUpdateItem} color="primary">
          Save
          </Button>
        <Button onClick={() => onEdit(undefined)} color="primary">
          Close
          </Button>
      </CardActions>
    </Card>
  </>
}

const mapStateToProps = ({ todoList: { items } }, props) => ({ item: selectorItemById(items, props) })

export default connect(mapStateToProps, { updateItem, onEdit })(TodoEdit)