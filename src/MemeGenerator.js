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

    }

    render() {
        return (
            <div>
                <form className ="meme-form">

                    <label>Top Text</label>
                    <input 
                        type = "text"
                        placeholder = "top text"
                        name = "topText"
                        value = {this.state.topText}
                        onChange = {this.handleChange}
                    />

                    <br />

                    <label>Bottom Text</label>
                    <input 
                        type = "texts"
                        placeholder ="bottom text"
                        name = "bottomText"
                        value = {this.state.bottomText}
                        onChange = {this.handleChange}
                    />

                    <button>Gen</button>
                </form>

            </div>
        )
    }
}

export default MemeGenerator