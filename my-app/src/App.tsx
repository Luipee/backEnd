
import React, {useEffect, useState} from "react";
import api from './services/api';
import User from "./components/User";

interface IUser {
  name:string
  email ?:string
}
function App() {
  const [users , setUsers] = useState([])
useEffect(() => 
  api.get('/users').then(response => {
    setUsers(response.data) 
    })
 ,  [])

  return (
    <div className="App">
      { users.map(user => <User key={user.email || 'Nao possui e-mail'} user={user}  />)}
      
    </div>
  );
}

export default App;
