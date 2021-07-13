import React, { useState } from 'react'

const Signup = ({ onLogin }) => {
    const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirmation, setPasswordConfirmation] = useState("")
	const [errors, setErrors] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch('/signup', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
		},
			body: JSON.stringify({
				username: username,
				password: password,
				password_confirmation: passwordConfirmation
			})
        })
		.then(r => r.json())
		.then(user => { 
			console.log(user)
			if (user.errors){
				setPassword("")
				setPasswordConfirmation("")
				const userErrors = user.errors.map(error => <h4>{error}</h4>)
				setErrors(userErrors)
			} else {
				onLogin(user)
			}
		})
    }


    return (
		<div className="login">
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
			<label>Confirm Password: </label>
			<input 
				type="password" 
				id="password_confirmation"
				value={passwordConfirmation}
				onChange={(e) => setPasswordConfirmation(e.target.value)}
			/>
			<br/>
			<br/>
			<input type="submit" />
        </form>
		<div>
			{errors} 
		</div>
		</div>
    )
}

export default Signup