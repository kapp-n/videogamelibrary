import React, { useState, useEffect } from 'react'
import GameForm from '../components/GameForm'
import Game from '../components/Game'

const Games = ({ user }) => {
    const [games, setGames] = useState([])
    const [error, setError] = useState("")
    const [formFlag, setFormFlag] = useState(false)


    useEffect(() =>{
        fetch('/video_games')
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if (data.error){
                setError(data.error)
            } else {
                setGames(data)
            }
        })
    }, [])



   

    const addGame = (g) => {
        fetch('/video_games', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
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

    const deleteGame = (g) => {
        fetch(`/video_games/${g.id}`, {
            method: "DELETE",
        }).then(r => {
            if(r.ok) {
                let newGames = games.filter(game => game.id !== g.id)
                setGames(newGames)
            }
        })
        
    }
    

    const allGames = games.map(game => <Game key={game.id} game={game} deleteGame={deleteGame} />)
        //linkto `/video_games/${game.id}`)

    if (error === '') {
        return (
            <div>
                <h1 id='name'>{user.username}'s favorite games</h1>
                {allGames}
                <hr id="game_form" />
                {formFlag ?
                    <GameForm addGame={addGame} />
                    :
                    <button id="add" onClick={() => setFormFlag(true)}>Add a Game</button>
                }
            </div>
        )
    } else {
        return (
            <h1 className="error">You're not logged in! Please login or sign-up!</h1>
        )
    }
}
export default Games