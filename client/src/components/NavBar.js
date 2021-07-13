import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

    if (props.loggedIn){
        return (
            <div>
                <button className="nav" onClick={props.logOut}>Log Out</button>
                <Link to='/video_games'>
                    <button className="nav">My Games</button>
                </Link>
                <hr/>
            </div>
        )
    } else {

        return (
            <div>
                <Link to='/signup'>
					<button className="nav">Sign Up</button>
				</Link>
				<Link to='/login'>
				    <button className="nav">Login</button>
				</Link>
                <br/>
                <br/>
            </div>
        )
    }
}

export default NavBar 
