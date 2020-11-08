import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import TodoList from './TodoList'
import TodoCreateItemForm from './TodoCreateItemForm'
import Layout from './Layout'
import TodoEdit from './TodoEdit'

const App = ({ editItemId }) => (
  <Layout>
    {editItemId && <TodoEdit itemId={editItemId} />}
    <Header />
    <TodoCreateItemForm />
    <TodoList />
  </Layout>
)

const mapStateToProps = ({ todoList: { editItemId } }) => ({ editItemId })
export default connect(mapStateToProps)(App)
