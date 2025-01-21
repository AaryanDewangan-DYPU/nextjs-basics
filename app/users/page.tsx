// Notes for Cashing - 
// code - {cache: 'no-store'}
// code - {cache: 'force-cache'}
// code - {cache: 'no-cache'} inside fetch

import React from 'react'

interface User {
    id: number
    name: string
    email: string
}

const Users = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', 
        {next: {revalidate: 10}})  // revalidate every 10 seconds, reloads every 10 seconds for new data
        // or we can use cache - {cache: 'no-store'} - no caching
    const data = await response.json()
    console.log(data)

  return (
    <div>
        <h1 style={{
            color: 'black', 
            fontFamily: 'Arial, Helvetica, sans-serif', 
            fontSize: '30px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginTop: '20px'}}>
                
            Users

        </h1>
        <ul>
            {data.map((user: User) => (
                <li key={user.id}>{user.name}, {user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users