import { useState, useEffect } from "react"
import UserCard from "../components/UserCard"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

function Home() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => {
        if (!r.ok) { throw new Error("failed to fetch users") }
        return r.json()
      })
      .then(data => setUsers(data))
      .catch(error => console.error(error))
  }, [])
  
  const userList = users.map(user => {
    return <UserCard key={user.id} user={user}/>
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home!</h1>
        <Outlet />
        {userList}
      </main>
    </>
  )
}

export default Home