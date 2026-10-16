import React from 'react'

const ChildComponent = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Section:</strong> {user.section}</p>
    </div>
  )
}

export default ChildComponent