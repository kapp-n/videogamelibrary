import React, { useState, useEffect } from 'react'
import GameForm from './components/GameForm'

const Games = () => {
    const [games, setGames] = useState([])
    const [errors, setErrors] = useState("")
    const [formFlag, setFormFlag] = useState(false)


    useEffect(() => {
        fetch('/video_games')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if (data) {
                if (data.errors){
                    setErrors(data.errors)
                } else {
                    setGames(data)
                }
            } else {
                setErrors("Not Authorized")
            }
        })
    }, [])

    const addGame = (g) => {
        fetch('/video_games', {
            method: "POST",
            headers: {
                'Content-Tye': 'application/json'
            },
            body: JSON.stringify(g)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setGames([...games, data])
            setFormFlag(false)
        })
    }

    //const allGames = games.map(game => <)

    if (error === '') {
        return (
            <div>
                {/*games*/}
                <hr />
                {formFlag ?
                    <GameForm addGame={addGame} />
                    :
                    <button onClick={() => setFormFlag(true)}>Add a Game</button>
                }
            </div>
        )
    } else {
        return (
            <h1>You're not logged in! Please login or sign-up!</h1>
        )
    }
}
export default Games