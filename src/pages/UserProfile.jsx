import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const params = useParams()
  const users = useOutletContext()

  const user = users.find(user => user.id === parseInt(params.id))

  return(
        <aside>
            { user.name ? <h1>{user.name}</h1> : <h1>Loading...</h1> }
        </aside>
    )
}

export default UserProfile