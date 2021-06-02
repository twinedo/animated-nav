import React, { useRef, useState } from 'react';
import '../styles/home.css';
import soundFile from '../assets/audios/alarm.mp3';

const Home = ({ show }) => {
    const audioRef = useRef(null);
    const audioArray = [
        'https://www.dewanvision.com/wp-content/uploads/2018/08/suara_roti.mp3',
        'https://www.dewanvision.com/wp-content/uploads/2018/10/aduh_ya_ampun.mp3',
        'https://simomot.com/wp-content/uploads/2014/01/nokia_lumia_1520.mp3',
    ];

    const [audioIndex, setAudioIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audio = audioArray[audioIndex];

    const handlePlay = () => {
        setAudioIndex(0);
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    return (
        <div className={show ? 'container-home active' : 'container-home'}>
            Home
            <div>
                <audio
                    autoPlay
                    controls={true}
                    preload='auto'
                    style={{ display: 'none' }}
                    ref={audioRef}
                    src={audio}
                    // src={soundFile}
                    onEnded={() => setAudioIndex((i) => i + 1)}
                />
                {isPlaying ? (
                    <button onClick={handlePause}>Pause</button>
                ) : (
                    <button onClick={handlePlay}>Play</button>
                )}
            </div>
        </div>
    );
};

export default Home;
