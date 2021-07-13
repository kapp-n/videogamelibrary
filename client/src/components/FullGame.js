import React, { useState, useEffect } from 'react'
import EditForm from '../containers/EditForm'

const FullGame = (props) => {
    const [game, setGame] = useState({})
    const [error, setError] = useState("")
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        fetch(`/video_games/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
			if (data.error){
				setError(data.error)
			} else {
				setGame(data)
            }
        })
    }, [])

    const editGame = (g) => {
        fetch(`/video_games/${g.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(g)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setGame(data)
            setFormFlag(false)
        })
    }


    if (error ===''){
        return (
            <div id="imgdiv">
                <img id="full_game_img" src={game.img_url} alt={game.title} />
                    <div id="full_game">
                    <h1>{game.title}</h1>
                    <h2>{game.release_year}</h2>
                    <hr id="title_hr"/>
                    <h4><u>Summary</u>:</h4> <p>{game.description}</p>
                    <h6><u>Genre</u>: {game.genre}</h6>
                    <h6><u>Platform(s)</u>: {game.platform}</h6>
                    <h6><u>Publisher</u>: {game.publisher}</h6>
                    <hr/>
                    {formFlag ?
                        <EditForm game={game} editGame={editGame} />
                        :
                        <button onClick={() => setFormFlag(true)}>Edit Game Entry</button>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <h1 className="error">{error}</h1>
        )
    }
}


export default FullGame 