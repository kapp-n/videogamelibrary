import React, { useState, useEffect } from 'react'

const FullGame = (props) => {
    const [game, setGame] = useState({})

    useEffect(() => {
        fetch(`/video_games/${props.match.params.id}`)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setGame(data)
        })
    }, [])


    return (
        <div id="full_game">
            <h2>{game.title}</h2>
            <h4>{game.release_year}</h4>
            <img id="full_game_img" src={game.img_url} alt={game.title} />
            <h4>Summary:</h4> <p>{game.description}</p>
            <h6>Genre: {game.genre}</h6>
            <h6>Platform: {game.platform}</h6>
            <h6>Publisher: {game.publisher}</h6>
            <hr/>
            
        </div>
    )
}


export default FullGame 