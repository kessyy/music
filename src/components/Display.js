import React, { Component } from 'react'

class Display extends Component{
    render() {
        return (
            <div className="details">
                <div className="song-img">
                    <img src={this.props.song.img_src} alt="Song Cover"/>
                </div>    
                <h3 className="song-title">{this.props.song.title}</h3>
                <h4 className="song-artist">{this.props.song.artist}</h4>
            </div>
            

        )
    }
}

export default Display;
