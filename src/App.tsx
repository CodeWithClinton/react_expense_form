import React from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseList from './components/ExpenseList'

const App = () => {
  return (
    <>
    <ExpenseForm />
    <ExpenseFilter />
    <ExpenseList />
    </>
  )
}

export default App