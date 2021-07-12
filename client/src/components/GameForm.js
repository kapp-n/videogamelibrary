import React, { Component } from 'react'

export default class GameForm extends Component {

    state = [
        title = '',
        rating = '',
        publisher = '',
        genre = '',
        platform = '',
        release_year = '',
        img_url = ''
    ]

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addGame(this.state)
        console.log(this.state, "adding game")

    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={handleSubmit}>
			<label>Title: </label>
			<input 
				type="text" 
				id="title"
				value={this.state.title}
				onChange={this.handleChange}
			/>
			<label>Game Rating (ex: "T", for teen): </label>
			<input 
				type="text" 
				id="rating"
				value={this.state.rating}
				onChange={this.handleChange}
			/>
			<label>Publisher (ex: "Nintendo"): </label>
			<input 
				type="text" 
				id="publisher"
				value={this.state.publisher}
				onChange={this.handleChange}
			/>
            <label>Genre: </label>
			<input 
				type="text" 
				id="genre"
				value={this.state.genre}
				onChange={this.handleChange}
			/>
            <label>Platform (ex: "Playstation"): </label>
			<input 
				type="text" 
				id="platform"
				value={this.state.platform}
				onChange={this.handleChange}
			/>
            <label>Release Year: </label>
			<input 
				type="text" 
				id="release-year"
				value={this.state.release_year}
				onChange={this.handleChange}
			/>
            <label>Game Rating: </label>
			<input 
				type="text" 
				id="img"
				value={this.state.img_url}
				onChange={this.handleChange}
			/>
			<br/>
			<input type="submit" />
        </form>
        )
    }
}
