import { useEffect, useRef, useState } from 'react';

import { Volume2, VolumeOff } from 'lucide-react';

import './index.css';

const MusicPlayer = () => {
  const loaded = useRef(false);
  const isFirstPlay = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!isFirstPlay.current) return;

    setIsPlaying(!isPlaying);
    const audio = document.getElementById('musicPlayer') as HTMLAudioElement;
    console.log('🚀 ~ audio:', audio);

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const playMusic = () => {
      const audio = document.getElementById('musicPlayer') as HTMLAudioElement;
      if (audio) {
        setIsPlaying(true);
        audio
          .play()
          .then(() => {
            isFirstPlay.current = true;
          })
          .catch(error => {
            console.log('🚀 ~ error:', error);
          });

        // Remove event listener
        document.removeEventListener('touchstart', playMusic);
        document.removeEventListener('click', playMusic);
      }
    };

    // Play when touch screen or click screen
    document.addEventListener('touchstart', playMusic);
    document.addEventListener('click', playMusic);
  }, []);

  return (
    <div className='music-player p-relative'>
      <button onClick={togglePlay} className='play-button p-relative'>
        {isPlaying ? <Volume2 size={24} /> : <VolumeOff size={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
