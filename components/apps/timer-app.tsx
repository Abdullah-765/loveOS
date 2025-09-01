'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Heart, Calendar, Sparkles } from 'lucide-react';

export function TimerApp() {
  const [currentTime, setCurrentTime] = useState(new Date());
  

  const relationshipStart = new Date('2025-06-14'); // January 15, 2024 - change this to your actual date!
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateTimeTogether = () => {
    const now = currentTime;
    const diffTime = now.getTime() - relationshipStart.getTime();
    
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateTimeTogether();

  const milestones = [
    { days: 30, title: "First Month", emoji: "🌙", achieved: days >= 30 },
    { days: 100, title: "100 Days", emoji: "💯", achieved: days >= 100 },
    { days: 365, title: "One Year", emoji: "🎂", achieved: days >= 365 },
    { days: 500, title: "500 Days", emoji: "🎉", achieved: days >= 500 },
    { days: 730, title: "Two Years", emoji: "💎", achieved: days >= 730 },
    { days: 1000, title: "1000 Days", emoji: "🏆", achieved: days >= 1000 },
  ];

  const nextMilestone = milestones.find(m => !m.achieved);
  const daysUntilNext = nextMilestone ? nextMilestone.days - days : 0;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-soft-pink/25 via-cream to-baby-blue/30 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Clock className="w-12 h-12 sm:w-16 sm:h-16 text-soft-pink mx-auto mb-4" />
          <h2 className="handwriting text-2xl sm:text-3xl text-soft-pink mb-2">Our Love Timer</h2>
          <p className="serif text-base sm:text-lg text-foreground/70">Counting every precious moment together ⏰</p>
        </div>

        {/* Main Timer Display */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-soft-pink/20 mb-8">
          <div className="text-center mb-6">
            <div className="flex justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-soft-pink animate-heartbeat" style={{ animationDelay: '0s' }} />
              <Heart className="w-6 h-6 text-lavender animate-heartbeat" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-6 h-6 text-baby-blue animate-heartbeat" style={{ animationDelay: '1s' }} />
            </div>
            <h3 className="handwriting text-2xl sm:text-3xl text-soft-pink mb-2">We have been together for</h3>
            <p className="serif text-sm text-foreground/60">Since {formatDate(relationshipStart)}</p>
          </div>

          {/* Time Display Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-soft-pink to-blush-pink rounded-2xl p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl text-white mb-1">{days}</div>
                <div className="text-xs sm:text-sm text-white/80">Days</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-lavender to-soft-purple rounded-2xl p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl text-white mb-1">{hours}</div>
                <div className="text-xs sm:text-sm text-white/80">Hours</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-baby-blue to-lavender rounded-2xl p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl text-white mb-1">{minutes}</div>
                <div className="text-xs sm:text-sm text-white/80">Minutes</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-soft-purple to-blush-pink rounded-2xl p-4 shadow-lg">
                <div className="text-2xl sm:text-3xl text-white mb-1">{seconds}</div>
                <div className="text-xs sm:text-sm text-white/80">Seconds</div>
              </div>
            </div>
          </div>

          {/* Alternative Time Formats */}
          <div className="bg-cream/50 rounded-2xl p-4 border border-soft-pink/10">
            <h4 className="handwriting text-lg text-soft-pink mb-3 text-center">That is also...</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-lg text-soft-pink">{Math.floor(days / 7)}</div>
                <div className="text-xs text-foreground/60">Weeks</div>
              </div>
              <div>
                <div className="text-lg text-soft-pink">{Math.floor(days / 30.44)}</div>
                <div className="text-xs text-foreground/60">Months</div>
              </div>
              <div>
                <div className="text-lg text-soft-pink">{(days / 365.25).toFixed(2)}</div>
                <div className="text-xs text-foreground/60">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-soft-pink/20 mb-8">
          <div className="text-center mb-6">
            <Sparkles className="w-8 h-8 text-soft-pink mx-auto mb-3" />
            <h3 className="handwriting text-2xl text-soft-pink mb-2">Love Milestones</h3>
            <p className="serif text-sm text-foreground/60">Celebrating our journey together</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                  milestone.achieved
                    ? 'bg-soft-pink/20 border-soft-pink/50 text-soft-pink'
                    : 'bg-gray-50 border-gray-200 text-gray-400'
                }`}
              >
                <div className="text-center">
                  <div className={`text-2xl mb-2 ${milestone.achieved ? '' : 'grayscale'}`}>
                    {milestone.emoji}
                  </div>
                  <div className="text-sm font-medium">{milestone.title}</div>
                  <div className="text-xs mt-1">{milestone.days} days</div>
                  {milestone.achieved && (
                    <div className="text-xs mt-1 text-soft-pink">✓ Achieved!</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {nextMilestone && (
            <div className="mt-6 text-center">
              <div className="bg-gradient-to-r from-soft-pink/10 to-lavender/10 rounded-2xl p-4 border border-soft-pink/20">
                <Calendar className="w-6 h-6 text-soft-pink mx-auto mb-2" />
                <h4 className="handwriting text-lg text-soft-pink mb-1">Next Milestone</h4>
                <p className="serif text-sm text-foreground/80">
                  {daysUntilNext} days until {nextMilestone.title} {nextMilestone.emoji}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Current Time Display */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-soft-pink/20">
          <div className="text-center">
            <Clock className="w-8 h-8 text-soft-pink mx-auto mb-3" />
            <h3 className="handwriting text-xl text-soft-pink mb-2">Right Now</h3>
            <div className="serif text-lg text-foreground/80 mb-2">
              {formatTime(currentTime)}
            </div>
            <div className="serif text-sm text-foreground/60">
              {formatDate(currentTime)}
            </div>
          </div>
        </div>

        {/* Sweet Message */}
        <div className="text-center mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-soft-pink/20 max-w-2xl mx-auto">
            <div className="flex justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-soft-pink animate-heartbeat" style={{ animationDelay: '0s' }} />
              <Clock className="w-6 h-6 text-lavender animate-heartbeat" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-6 h-6 text-baby-blue animate-heartbeat" style={{ animationDelay: '1s' }} />
            </div>
            <h3 className="handwriting text-2xl text-soft-pink mb-4">Every Second Counts</h3>
            <p className="serif text-base text-foreground/80 leading-relaxed">
              Time flies when you are having fun, but with you, every moment feels like a beautiful eternity. 
              Here is to all the seconds, minutes, hours, and days we have shared, and to all the ones still to come. 
              I love you more with each passing moment.
            </p>
            <div className="mt-4 text-2xl">⏰💕</div>
          </div>
        </div>
      </div>
    </div>
  );
}