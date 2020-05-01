import React, {Component }from "react";

class MemeGenerator extends Component {

    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemeImgs : memes})
        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form className ="meme-form">

                    
                    <input 
                        type = "text"
                        placeholder = "top text"
                        name = "topText"
                        value = {this.state.topText}
                        onChange = {this.handleChange}
                    />

                    <br />

                    
                    <input 
                        type = "texts"
                        placeholder ="bottom text"
                        name = "bottomText"
                        value = {this.state.bottomText}
                        onChange = {this.handleChange}
                    />

                    <button>Gen</button>
                </form>

            <h1>{this.state.topText} {this.state.bottomText}</h1>

            </div>
        )
    }
}

export default MemeGenerator