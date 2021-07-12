import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = (props) => {

    if (props.loggedIn){
        return (
            <div>
                <button onClick={props.logOut}>Log Out</button>
                <Link to='/video_games'>
                    <button>My Games</button>
                </Link>
                <hr/>
            </div>
        )
    } else {

        return (
            <div>
                <Link to='/signup'>
					<button>Sign Up</button>
				</Link>
				<Link to='/login'>
				    <button>Login</button>
				</Link>
                <br/>
                <br/>
            </div>
        )
    }
}

export default NavBar 
