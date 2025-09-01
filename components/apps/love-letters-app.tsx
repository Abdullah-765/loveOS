'use client';

import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { Button } from '../ui/button';

export function LoveLettersApp() {
  const [currentLetter, setCurrentLetter] = useState(0);

  const letters = [
    {
      id: 1,
      title: 'A Letter of Sunshine',
      date: 'A Bright Morning',
      content: `I woke up today with the sunlight spilling into my room, and it reminded me of how warmth can change everything. Sometimes, even the smallest rays can brighten up the darkest spaces. Life is a little like that too — unexpected moments of light that make us smile.`
    },
    {
      id: 2,
      title: 'A Little Daydream',
      date: 'An Afternoon Thought',
      content: `I caught myself daydreaming while sipping tea today. Isn’t it funny how the mind wanders? One moment you’re staring at the steam rising from the cup, and the next you’re building entire worlds in your head. Maybe that’s what makes imagination so magical.`
    },
    {
      id: 3,
      title: 'Evening Reflections',
      date: 'A Quiet Night',
      content: `The night feels calm. The stars are scattered across the sky, telling stories we’ll never fully know. I like to think each star holds a secret, a memory, or a wish someone made a long time ago. There’s something comforting about believing in those little mysteries.`
    }
  ];

  const nextLetter = () => {
    setCurrentLetter((prev) => (prev + 1) % letters.length);
  };

  const prevLetter = () => {
    setCurrentLetter((prev) => (prev - 1 + letters.length) % letters.length);
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-blush-pink/20 via-cream to-lavender/20 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-soft-pink mx-auto mb-4" />
          <h2 className="handwriting text-2xl sm:text-3xl text-soft-pink mb-2">Love Letters Collection</h2>
          <p className="serif text-base sm:text-lg text-foreground/70">A little box of simple thoughts and words 💌</p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-soft-pink/20 min-h-[400px] sm:min-h-[500px]">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevLetter}
              className="p-2 hover:bg-soft-pink/20 rounded-full"
            >
              <ChevronLeft className="w-5 h-5 text-soft-pink" />
            </Button>

            <div className="text-center">
              <h3 className="handwriting text-xl sm:text-2xl text-soft-pink mb-1">
                {letters[currentLetter].title}
              </h3>
              <p className="serif text-sm text-foreground/60">
                {letters[currentLetter].date}
              </p>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextLetter}
              className="p-2 hover:bg-soft-pink/20 rounded-full"
            >
              <ChevronRight className="w-5 h-5 text-soft-pink" />
            </Button>
          </div>

          <div className="bg-cream/50 rounded-2xl p-6 mb-6 border border-soft-pink/10">
            <div className="serif text-base sm:text-lg text-foreground leading-relaxed whitespace-pre-line">
              {letters[currentLetter].content}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            {letters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLetter(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentLetter
                    ? 'bg-soft-pink w-6'
                    : 'bg-soft-pink/30 hover:bg-soft-pink/50'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <Heart className="w-6 h-6 text-soft-pink mx-auto animate-heartbeat" />
          </div>
        </div>
      </div>
    </div>
  );
}
