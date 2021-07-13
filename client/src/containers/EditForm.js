import React, { Component } from 'react'

export default class EditForm extends Component {

    state = {
        title : this.props.game.title,
        publisher : this.props.game.publisher,
        genre : this.props.game.genre,
        platform : this.props.game.platform,
        release_year : this.props.game.release_year,
        img_url : this.props.game.img_url,
		description : this.props.game.description,
        id: this.props.game.id
	}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editGame(this.state)
        console.log(this.state, "editing game")
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form className="login" onSubmit={this.handleSubmit}>
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
            <label>Platform(s) (ex: "Playstation"): </label>
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
