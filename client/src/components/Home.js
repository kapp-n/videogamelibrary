import React from 'react'

const Home = (props) => {
    if(props.loggedIn){
    return (
        <div>
            <h1>Hi, {`${props.user.username}`} </h1>
            <p>Welcome back!</p>
            <p>To view your personal library, use the navigation above</p>
        </div>
    )
    } else {
        return(
        <div>
            <h1>Your Personal Video Game Library</h1>
            <p> please log in to view </p>
        </div>
        )}
}


export default Home