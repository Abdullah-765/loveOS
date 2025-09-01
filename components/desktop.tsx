'use client';

import React, { useState, useEffect } from 'react';

import { Heart, Mail, Camera, Sparkles, Flame, Calendar, Music, Gift, Star, CalendarHeart } from 'lucide-react';

import { LoveLettersApp } from './apps/love-letters-app';
import { MemoriesApp } from './apps/memories-app';
import { PhotosApp } from './apps/photos-app';
import { TimerApp } from './apps/timer-app';
import { PlaylistApp } from './apps/playlist-app';
import { NaughtySecretsApp } from './apps/naughty-app';

export function Desktop() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    {
      id: 'love-letters',
      name: 'Love Letters',
      icon: Mail,
      color: 'from-soft-pink to-blush-pink',
      component: LoveLettersApp,
    },
    {
      id: 'photos',
      name: 'Our Photos',
      icon: Camera,
      color: 'from-lavender to-soft-purple',
      component: PhotosApp,
    },
    {
      id: 'memories',
      name: 'Sweet Memories',
      icon: Heart,
      color: 'from-baby-blue to-lavender',
      component: MemoriesApp,
    },
    {
      id: 'playlist',
      name: 'Our Songs',
      icon: Music,
      color: 'from-cream to-blush-pink',
      component: PlaylistApp,
    },
    {
      id: 'timer',
      name: 'Count Together',
      icon: CalendarHeart,
      color: 'from-baby-blue to-blush-pink',
      component: TimerApp,
    },
    {
      id: 'naughty',
      name: 'Freaky Side',
      icon: Flame,
      color: 'from-red-500 to-pink-500',
      component: NaughtySecretsApp,
    },
  ];

  const openApp = (appId: string) => {
    setActiveApp(appId);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  const ActiveAppComponent = apps.find((app) => app.id === activeApp)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-blush-pink/20 to-lavender/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-12 left-8 w-6 h-6 sm:w-8 sm:h-8 text-soft-pink/20 animate-heartbeat" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-24 right-12 w-5 h-5 sm:w-6 sm:h-6 text-lavender/30 animate-heartbeat" style={{ animationDelay: '1s' }} />
        <Star className="absolute bottom-24 left-6 w-4 h-4 sm:w-5 sm:h-5 text-baby-blue/25 animate-heartbeat" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-16 right-20 w-5 h-5 sm:w-6 sm:h-6 text-soft-purple/20 animate-heartbeat" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Taskbar */}
      <div className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-soft-pink/20 p-3 sm:p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-soft-pink" />
            <span className="handwriting text-lg sm:text-xl text-soft-pink">LoveOS</span>
          </div>
          <div className="serif text-xs sm:text-sm text-foreground/70">
            {currentTime.toLocaleString('en-US', {
              weekday: 'short',
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
            })}
          </div>
        </div>
      </div>

      {/* Desktop apps */}
      <div className="pt-16 sm:pt-20 p-4 sm:p-8">
        <div className="max-w-lg sm:max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h1 className="handwriting text-3xl sm:text-5xl text-soft-pink mb-3 sm:mb-4">Welcome to Our Love Story</h1>
            <p className="serif text-lg sm:text-xl text-foreground/80">Click on any app to explore our memories together 💕</p>
          </div>

          {/* Main apps grid */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8">
            {apps.map((app, index) => (
              <div
                key={app.id}
                className="animate-slide-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openApp(app.id)}
              >
                <div className="text-center">
                  <div
                    className={`w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${app.color} shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group-hover:rotate-3`}
                  >
                    {React.createElement(app.icon, { className: 'w-12 h-12 sm:w-14 sm:h-14 text-white' })}
                  </div>
                  <p className="serif text-sm sm:text-base text-foreground/80 group-hover:text-soft-pink transition-colors duration-200 px-1">
                    {app.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App modal */}
      {activeApp && ActiveAppComponent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="w-full h-full sm:max-w-4xl sm:max-h-[90vh] sm:h-auto bg-white rounded-none sm:rounded-3xl shadow-2xl overflow-hidden animate-fade-in-scale">
            <div className="bg-gradient-to-r from-soft-pink to-lavender p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {React.createElement(apps.find((app) => app.id === activeApp)?.icon || Heart, {
                  className: 'w-5 h-5 sm:w-6 sm:h-6 text-white',
                })}
                <span className="handwriting text-lg sm:text-xl text-white">
                  {apps.find((app) => app.id === activeApp)?.name}
                </span>
              </div>
              <button
                onClick={closeApp}
                className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-200 text-lg sm:text-base"
              >
                ✕
              </button>
            </div>
            <div className="h-[calc(100vh-3.5rem)] sm:max-h-[calc(90vh-4rem)] overflow-y-auto">
              <ActiveAppComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
