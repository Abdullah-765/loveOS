'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Heart, Sparkles } from 'lucide-react';

interface BootScreenProps {
  onBootComplete: () => void;
}

export function BootScreen({ onBootComplete }: BootScreenProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setShowDialog(false);
    setIsBooting(true);

    // Simulate boot progress
    const interval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onBootComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blush-pink via-cream to-lavender flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-sm sm:max-w-md">
        {/* Background hearts */}
        <div className="absolute inset-0 overflow-hidden">
          <Heart className="absolute top-8 left-6 w-5 h-5 sm:w-6 sm:h-6 text-soft-pink/30 animate-heartbeat" style={{ animationDelay: '0s' }} />
          <Heart className="absolute top-16 right-12 w-4 h-4 text-lavender/40 animate-heartbeat" style={{ animationDelay: '1s' }} />
          <Heart className="absolute bottom-16 left-12 w-4 h-4 sm:w-5 sm:h-5 text-baby-blue/30 animate-heartbeat" style={{ animationDelay: '2s' }} />
          <Sparkles className="absolute top-24 left-1/2 w-5 h-5 sm:w-6 sm:h-6 text-soft-purple/40 animate-heartbeat" style={{ animationDelay: '0.5s' }} />
        </div>

        {!showDialog && !isBooting && (
          <div className="animate-fade-in-scale text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-soft-pink/20">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-soft-pink mx-auto mb-3 sm:mb-4 animate-heartbeat" />
              <h1 className="handwriting text-3xl sm:text-4xl text-soft-pink mb-2">Starting...</h1>
              <p className="serif text-base sm:text-lg text-foreground/70">Preparing something special</p>
            </div>
          </div>
        )}

        {showDialog && !isBooting && (
          <div className="animate-fade-in-scale text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-soft-pink/30">
              <div className="mb-6">
                <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-4">
                  <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-soft-pink animate-heartbeat" />
                  <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 text-lavender animate-heartbeat" style={{ animationDelay: '0.5s' }} />
                </div>
                <h2 className="handwriting text-2xl sm:text-3xl text-soft-pink mb-4">Before we begin...</h2>
                <p className="serif text-base sm:text-lg text-foreground mb-6 px-2">
                  You must first accept that I love you more
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleAccept}
                  className="w-full h-12 sm:h-auto bg-gradient-to-r from-soft-pink to-lavender hover:from-lavender hover:to-soft-pink text-white rounded-full py-3 px-6 text-base sm:text-lg handwriting shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Yes, I accept! 💕
                </Button>
                <Button
                  onClick={handleAccept}
                  variant="outline"
                  className="w-full h-12 sm:h-auto border-2 border-soft-pink text-soft-pink hover:bg-soft-pink hover:text-white rounded-full py-3 px-6 text-base sm:text-lg handwriting transition-all duration-300"
                >
                  Yes, absolutely! 💖
                </Button>
              </div>

              <p className="serif text-xs sm:text-sm text-foreground/60 mt-4 italic px-2">
                (There is only one correct answer 😉)
              </p>
            </div>
          </div>
        )}

        {isBooting && (
          <div className="animate-fade-in-scale text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-soft-pink/30">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-soft-pink mx-auto mb-4 animate-heartbeat" />
              <h2 className="handwriting text-2xl sm:text-3xl text-soft-pink mb-6">Booting LoveOS...</h2>

              <div className="space-y-4">
                <div className="w-full bg-blush-pink/30 rounded-full h-2 sm:h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-soft-pink to-lavender rounded-full transition-all duration-100"
                    style={{ width: `${bootProgress}%` }}
                  />
                </div>
                <p className="serif text-sm text-foreground/70 px-2">
                  {bootProgress < 30 && 'Loading memories...'}
                  {bootProgress >= 30 && bootProgress < 60 && 'Preparing love letters...'}
                  {bootProgress >= 60 && bootProgress < 90 && 'Organizing photos...'}
                  {bootProgress >= 90 && 'Almost ready! 💕'}
                </p>
                <p className="serif text-xs text-foreground/50">{bootProgress}% complete</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
