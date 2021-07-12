import React, { useState } from 'react'

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch('/login', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
		},
			body: JSON.stringify({
				username: username,
				password: password
			})
        })
		.then(r => r.json())
		.then(user => onLogin(user))
    }


    return (
        <form onSubmit={handleSubmit}>
			<label>Username: </label>
			<input 
				type="text" 
				id="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<br/>
			<br/>
			<label>Password: </label>
			<input 
				type="password" 
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<br/>
			<br/>
			<input type="submit" />
        </form>
}

export default Login