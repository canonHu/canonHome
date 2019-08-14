import '../style/App.css';
import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../store/containers/AddTodo'
import VisibleTodoList from '../store/containers/VisibleTodoList'

const App = () => (
  <div>
    <h2 className="home">Home</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App