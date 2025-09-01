'use client';

import React, { useState } from 'react';
import { Camera, Heart, X } from 'lucide-react';
// import { img } from '../figma/img';

export function PhotosApp() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

const photos = [

  {
    id: 1,
    src: "https://picsum.photos/seed/sunset1/400/300",
    caption: "A calm sunset casting gold over the water.",
    date: "Golden hour"
  },

  {
    id: 2,
    src: "https://picsum.photos/seed/mountains2/400/300",
    caption: "Snowy peaks standing tall against a crisp sky.",
    date: "Nature’s beauty"
  },

  {
    id: 3,
    src: "https://picsum.photos/seed/city3/400/300",
    caption: "City lights glowing under a deep night sky.",
    date: "Bright nights"
  },

  {
    id: 4,
    src: "https://picsum.photos/seed/forest4/400/300",
    caption: "A quiet forest path, green and peaceful.",
    date: "Into the woods"
  },

  {
    id: 5,
    src: "https://picsum.photos/seed/coffee5/400/300",
    caption: "A warm cup and an open book: perfect.",
    date: "Cozy vibes"
  },

  {
    id: 6,
    src: "https://picsum.photos/seed/stars6/400/300",
    caption: "A blanket of stars scattered across the night.",
    date: "Stargazing"
  },

  {
    id: 7,
    src: "https://picsum.photos/seed/flowers7/400/300",
    caption: "Wildflowers swaying softly in the breeze.",
    date: "Blooming days"
  },

  {
    id: 8,
    src: "https://picsum.photos/seed/ocean8/400/300",
    caption: "Rolling waves smoothing the shore.",
    date: "Endless blue"
  },

  {
    id: 9,
    src: "https://picsum.photos/seed/lake9/400/300",
    caption: "A still lake reflecting the morning sky.",
    date: "Reflection"
  },

  {
    id: 10,
    src: "https://picsum.photos/seed/bridge10/400/300",
    caption: "A quiet bridge stretching into the horizon.",
    date: "Pathways"
  },

  {
    id: 11,
    src: "https://picsum.photos/seed/snow11/400/300",
    caption: "Snowflakes covering rooftops in white.",
    date: "Winter charm"
  },

  {
    id: 12,
    src: "https://picsum.photos/seed/beach12/400/300",
    caption: "Golden sand with gentle waves.",
    date: "Seaside escape"
  },

  {
    id: 13,
    src: "https://picsum.photos/seed/road13/400/300",
    caption: "An empty road vanishing into the mountains.",
    date: "Adventure awaits"
  },

  {
    id: 14,
    src: "https://picsum.photos/seed/clouds14/400/300",
    caption: "Fluffy clouds drifting in a blue sky.",
    date: "Peaceful skies"
  },

  {
    id: 15,
    src: "https://picsum.photos/seed/field15/400/300",
    caption: "Golden fields stretching into the horizon.",
    date: "Harvest glow"
  },

  {
    id: 16,
    src: "https://picsum.photos/seed/river16/400/300",
    caption: "A winding river cutting through the valley.",
    date: "Flowing moments"
  },

  {
    id: 17,
    src: "https://picsum.photos/seed/castle17/400/300",
    caption: "An old castle standing tall with history.",
    date: "Timeless walls"
  },

  {
    id: 18,
    src: "https://picsum.photos/seed/market18/400/300",
    caption: "A lively street market full of colors.",
    date: "Daily hustle"
  },

  {
    id: 19,
    src: "https://picsum.photos/seed/rain19/400/300",
    caption: "Raindrops painting patterns on the glass.",
    date: "Rainy day"
  },

  {
    id: 20,
    src: "https://picsum.photos/seed/fire20/400/300",
    caption: "Warm fire crackling in a cozy cabin.",
    date: "Comfort nights"
  },

  {
    id: 21,
    src: "https://picsum.photos/seed/balloon21/400/300",
    caption: "Hot air balloons floating at sunrise.",
    date: "Up and away"
  },

  {
    id: 22,
    src: "https://picsum.photos/seed/street22/400/300",
    caption: "A charming old street glowing with lights.",
    date: "Evening walk"
  },

  {
    id: 23,
    src: "https://picsum.photos/seed/canyon23/400/300",
    caption: "A vast canyon carved by time.",
    date: "Majestic views"
  },

  {
    id: 24,
    src: "https://picsum.photos/seed/desert24/400/300",
    caption: "Golden dunes under a blazing sun.",
    date: "Desert dream"
  },

  {
    id: 25,
    src: "https://picsum.photos/seed/forest25/400/300",
    caption: "Sunlight breaking through tall trees.",
    date: "Morning light"
  },

];



  return (
    <div className="min-h-full bg-gradient-to-br from-lavender/20 via-cream to-baby-blue/20 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-soft-pink mx-auto mb-4" />
          <h2 className="handwriting text-2xl sm:text-3xl text-soft-pink mb-2">jald hi ham dono ki sth m pics hongi idher</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer"
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <div className="absolute inset-2 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs sm:text-sm font-medium line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
                <Heart className="absolute top-3 right-3 w-4 h-4 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedPhoto}
                alt="Selected photo"
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-white serif text-base sm:text-lg">
                    {photos.find(p => p.src === selectedPhoto)?.caption}
                  </p>
                  <p className="text-white/70 serif text-sm mt-1">
                    {photos.find(p => p.src === selectedPhoto)?.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-soft-pink/20 max-w-md mx-auto">
            <Heart className="w-8 h-8 text-soft-pink mx-auto mb-3 animate-heartbeat" />
            <p className="serif text-base text-foreground/80">
              Every photo is a reminder of how lucky I am to love you and be loved by you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}