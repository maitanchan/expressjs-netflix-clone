import React, { useContext, useState } from 'react'
import './login.css'
import { login } from '../../context/authContext/callApi'
import { AuthContext } from '../../context/authContext/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

   const [username, setUsername] = useState("")

   const [password, setPassword] = useState("")

   const { isFetching , dispatch} = useContext(AuthContext)

   const navigate = useNavigate()

    const handleLogin = (e) => {

      e.preventDefault()

      login({username, password}, dispatch).then(() => {

        navigate("/")

      }).catch((error) => {

        console.log(error)
        
      })

    }

  return (
    <div className="login">
      
    <form className="loginForm">
      <input
        type="text"
        placeholder="username"
        className="loginInput"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="loginInput"
        onChange={(e) => setPassword(e.target.value)}

      />
      <button className="loginButton" onClick={handleLogin} disabled={isFetching}>
        Login
      </button>
    </form>
  </div>
  )
}

export default Login