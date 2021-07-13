import React from 'react'
import { Link } from 'react-router-dom'

const Game = ({ game, deleteGame }) => {
    return (
        <div id="gamecard">
            <button id="delete_button" onClick={() => deleteGame(game)}>X</button>
            <Link id="game" to={`/video_games/${game.id}`}>
                <img className='game_img' src={`${game.img_url}`} />
                <br />
                <h4 id="game_title">{game.title}</h4>
            </Link>
        </div>
    )
}


export default Game