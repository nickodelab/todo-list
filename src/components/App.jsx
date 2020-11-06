import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import TodoList from './TodoList'
import TodoCreateItemForm from './TodoCreateItemForm'
import Layout from './Layout'
import TodoEdit from './TodoEdit'

const App = ({ match: { params }}) => <>
  <Layout>
    {params.itemId && <TodoEdit itemId={params.itemId} />}
    <Header />
    <TodoCreateItemForm />
    <TodoList />
  </Layout>
</>

const mapStateToProps = (state) => ({ todoList: state })
export default connect(mapStateToProps)(withRouter(App))