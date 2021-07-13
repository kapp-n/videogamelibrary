import React, { Component } from 'react'

export default class GameForm extends Component {

    state = {
        title : '',
        publisher : '',
        genre : '',
        platform : '',
        release_year : '',
        img_url : '',
		description : ''
	}

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
            <form onSubmit={this.handleSubmit}>
			<label>Title: </label>
			<input 
				type="text" 
				name="title"
				value={this.state.title}
				onChange={this.handleChange}
			/>
			<br/>
			<br/>
			<label>Publisher (ex: "Nintendo"): </label>
			<input 
				type="text" 
				name="publisher"
				value={this.state.publisher}
				onChange={this.handleChange}
			/>
			<br/>
			<br/>
            <label>Genre: </label>
			<input 
				type="text" 
				name="genre"
				value={this.state.genre}
				onChange={this.handleChange}
			/>
			<br/>
			<br/>
            <label>Platform (ex: "Playstation"): </label>
			<input 
				type="text" 
				name="platform"
				value={this.state.platform}
				onChange={this.handleChange}
			/>
			<br/>
			<br/>
            <label>Release Year: </label>
			<input 
				type="text" 
				name="release_year"
				value={this.state.release_year}
				onChange={this.handleChange}
			/>
			<br/>
			<br/>
			<label>Description: </label>
			<textarea
				rows="4"
				cols="20" 
				type="text"
				name="description"
				value={this.state.description}
				onChange={this.handleChange}
			/>
			<br/>
			<br/>
			<label>Image URL: </label>
			<input 
				type="text" 
				name="img_url"
				value={this.state.img_url}
				onChange={this.handleChange}
			/>
			<br/>
			<br/>
			<input type="submit" />
        </form>
        )
    }
}
