import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  audioSrc?: string;
  onStart?: () => void;
}

// const MusicPlayer = ({ audioSrc = '/Singham.mp3' }: MusicPlayerProps) => {
const MusicPlayer = ({
  audioSrc = '/Singham.mp3',
  onStart,
}: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Audio play failed, likely no audio file yet
          console.log('Audio file not found or cannot play');
        });
      }
      if (!hasStarted) {
        onStart?.();
      }
      setIsPlaying(!isPlaying);
      setHasStarted(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
  }, []);

  if (hasStarted) {
    return (
      <>
        <audio ref={audioRef} src={audioSrc} />
        <button
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 text-foreground transition-all duration-300 hover:bg-foreground/20 hover:scale-110"
          aria-label={isPlaying ? 'Mute music' : 'Play music'}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </button>
      </>
    );
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} />
      <button
        onClick={toggleMusic}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide animate-pulse-glow transition-all duration-300 hover:scale-105"
      >
        <Volume2 className="w-5 h-5" />
        <span>Teleport me!
        </span>
      </button>
    </>
  );
};

export default MusicPlayer;
