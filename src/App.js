import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "I'm Yours",
      artist: "Alessia Cara",
      img_src: "./images/song-4.jpg",
      src: "./tracks/I'm-Yours.mp3"
    },
    {
      title: "Sit Still, Look Pretty",
      artist: "Daya",
      img_src: "./images/song-4.jpg",
      src: "./tracks/Sit-Still-Look-Pretty.mp3"
    },
    {
      title: "Bird Set Free",
      artist: "Sia",
      img_src: "./images/sia.jpg",
      src: "./music/Bird-Set-Free.mp3"
    },
    {
      title: "Desperado",
      artist: "Rihanna",
      img_src: "./images/anti.jpg",
      src: "./tracks/Desperado.mp3"
    },
    {
      title: "Water Under The Bridge",
      artist: "Adele",
      img_src: "./images/Adele.jpg",
      src: "./tracks/Water-Under-the-Bridge.mp3"
    },
    {
      title: "Single & Searching",
      artist: "Yemi Alade ft Falz",
      img_src: "./images/yemi.jpg",
      src: "./tracks/Single-&-Searching.mp3"
    },
    {
      title: "Vibration",
      artist: "Fireboy DML",
      img_src: "./images/fireboy.jpg",
      src: "./tracks/VIBRATION.mp3"
    }
  ]);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [nextTrackIndex, setNextTrackIndex] = useState(0);

  useEffect(() => {
    setNextTrackIndex(() => {
      if (currentTrackIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentTrackIndex + 1;
      }
    });
  }, [currentTrackIndex]);

  return (
    <div className="App">
      <Player 
        currentTrackIndex={currentTrackIndex} 
        setCurrentTrackIndex={setCurrentTrackIndex} 
        nextTrackIndex={nextTrackIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
