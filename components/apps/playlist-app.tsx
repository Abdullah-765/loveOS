'use client';

import React, { useRef, useState } from 'react';
import { Music, Play, Pause, Heart, Headphones } from 'lucide-react';
import { Button } from '../ui/button';

interface Song {
  id: number;
  title: string;
  artist: string;
  memory: string;
  duration: string;
  file: string;
}

export function PlaylistApp() {
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});

  const songs: Song[] = [
       {
      id: 1,
      title: 'Tu Chahiye',
      artist: 'Atif Aslam',
      memory: 'A song that always feels calm and refreshing to listen to.',
      duration: '3:50',
      file: 'Tu-Chahiye.mp3',
    },

    {
      id: 2,
      title: 'Maula mere Maula',
      artist: 'Roopkumar Rathod,',
      memory: 'This track has a timeless vibe that never gets old.',
      duration: '4:48',
      file: 'Maula-mere-Maula.mp3',
    },

    {
      id: 3,
      title: 'Tere Liye',
      artist: 'Atif Aslam',
      memory: 'A classic that feels emotional every single time.',
      duration: '5:01',
      file: 'Tere-Liye.mp3',
    },

    {
      id: 4,
      title: 'Until I Found You',
      artist: 'Stephen Sanchez',
      memory: 'Soft, romantic, and easy to get lost in.',
      duration: '2:55',
      file: 'Until-I-Found-you.mp3',
    },

    {
      id: 5,
      title: "Haan ke haan",
      artist: 'Monali Thakur',
      memory: 'A cheerful tune that instantly lifts the mood.',
      duration: '3:10',
      file: 'Haan-Ke-Haan.mp3',
    },

    {
      id: 6,
      title: 'Mere Samnewali Khidki Mein',
      artist: 'Harry Styles',
      memory: 'A lighthearted melody that feels playful and fun.',
      duration: '3:28',
      file: 'Mere-Samnewali-Khidki-Mein.mp3',
    },
  ];

  const playPause = (songId: number) => {
    if (currentSong === songId) {
      audioRefs.current[songId]?.pause();
      setCurrentSong(null);
    } else {
      // Pause any currently playing song
      if (currentSong !== null) {
        const currentAudio = audioRefs.current[currentSong];
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
      }

      // Play selected song
      const selectedAudio = audioRefs.current[songId];
      if (selectedAudio) {
        selectedAudio.play();
        setCurrentSong(songId);
      }
    }
  };

  const handleEnded = () => {
    setCurrentSong(null);
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-cream via-blush-pink/20 to-lavender/20 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Music className="w-12 h-12 sm:w-16 sm:h-16 text-soft-pink mx-auto mb-4" />
          <h2 className="handwriting text-2xl sm:text-3xl text-soft-pink mb-2">Our Love Playlist</h2>
          <p className="serif text-base sm:text-lg text-foreground/70">Songs that remind me of you 🎵</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-soft-pink/20">
          <div className="space-y-3">
            {songs.map((song) => (
              <div
                key={song.id}
                className={`group p-4 rounded-2xl transition-all duration-300 hover:bg-soft-pink/10 ${
                  currentSong === song.id ? 'bg-soft-pink/20' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playPause(song.id)}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-soft-pink to-lavender hover:from-lavender hover:to-soft-pink text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {currentSong === song.id ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </Button>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="handwriting text-lg text-soft-pink group-hover:text-soft-pink/80 transition-colors duration-200">
                          {song.title}
                        </h3>
                        <p className="serif text-sm text-foreground/60">{song.artist}</p>
                      </div>
                      <span className="serif text-sm text-foreground/50 ml-4">{song.duration}</span>
                    </div>
                    <p className="serif text-sm text-foreground/70 mt-2 italic">{song.memory}</p>
                  </div>

                  <Heart
                    className={`w-5 h-5 text-soft-pink/60 group-hover:text-soft-pink transition-colors duration-200 ${
                      currentSong === song.id ? 'animate-heartbeat' : ''
                    }`}
                  />
                </div>

                <audio
                  ref={(el) => {
                    audioRefs.current[song.id] = el;
                  }}
                  src={`/songs/${song.file}`}
                  onEnded={handleEnded}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-cream/50 rounded-2xl p-6 border border-soft-pink/10">
              <Headphones className="w-8 h-8 text-soft-pink mx-auto mb-3" />
              <p className="serif text-lg text-foreground/80 mb-2">
                Music sounds better when I am thinking of you
              </p>
              <p className="serif text-m text-foreground/60 italic">
                Every love song reminds me of you now my love
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-soft-pink/20 max-w-md mx-auto">
            <div className="flex justify-center space-x-2 mb-4">
              <Music className="w-6 h-6 text-soft-pink animate-heartbeat" style={{ animationDelay: '0s' }} />
              <Heart className="w-6 h-6 text-lavender animate-heartbeat" style={{ animationDelay: '0.5s' }} />
              <Music className="w-6 h-6 text-baby-blue animate-heartbeat" style={{ animationDelay: '1s' }} />
            </div>
            <p className="serif text-lg text-foreground/80">
              One day we will slow dance to all of these songs in our own living room
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
