import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

class Controls extends Component{
    render() {
        return (
            <div className="controls">
            <i className="skip-btn" onClick={()=> this.props.SkipSong(false)}>
            <FontAwesomeIcon icon={faBackward} />
            </i>
            <i className="play-btn" onClick={()=> this.props.setIsPlaying(!this.props.isPlaying)}>
            <FontAwesomeIcon icon={this.props.isPlaying ? faPause : faPlay} />
            </i>
            <i className="skip-btn" onClick={()=> this.props.SkipSong()}>
            <FontAwesomeIcon icon={faForward} />
            </i>
            </div>
        )
    }
}

export default Controls