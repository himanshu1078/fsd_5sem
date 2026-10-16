import React from 'react'
import ChildComponent from './ChildComponent'

const App = () => {
  const user = {
    name: "Himanshu",
    email: "himanshu@gmail.com",
    section: "cse-18"
  }

  return (
    <div>
      <h1>App Component</h1>
      <ChildComponent user={user} />
    </div>
  )
}

export default App