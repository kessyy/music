import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Display from './Display';

function Player(props) {
    const track = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            track.current.play();
        } else {
            track.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentTrackIndex(() => {
                let temp = props.currentTrackIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentTrackIndex(() => {
                let temp = props.currentTrackIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="main">
            <audio src={props.songs[props.currentTrackIndex].src} ref={track}></audio>
            <h4>Playing now</h4>
            <Display song={props.songs[props.currentTrackIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{props.songs[props.nextTrackIndex].title} by {props.songs[props.nextTrackIndex].artist}</span></p>
        </div>
    )
}

export default Player;
