import React from 'react'

export default function ProfilePage({user}) {
  return (
    <div>
      <h1>User Details</h1>
      <p>UserName : {user.un}</p>
      <p>Email : {user.em}</p>

    </div>
  )
}
