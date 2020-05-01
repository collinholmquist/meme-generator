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
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(event){

        event.preventDefault()

        const randIndex = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMeme = this.state.allMemeImgs[randIndex].url

        this.setState({randomImage: randMeme})
    }

    render() {
        return (
            <div>
                <form className ="meme-form" onSubmit = {this.handleSubmit}>
                    
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

                    <button
                
                    >Gen
                    </button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImage} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>

            </div>
        )
    }
}

export default MemeGenerator