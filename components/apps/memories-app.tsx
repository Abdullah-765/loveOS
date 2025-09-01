'use client';

import React, { useState } from 'react';
import { Heart, Calendar, MapPin, Sparkles, Camera, Eye, X } from 'lucide-react';

export function MemoriesApp() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const memories = [
    {
      id: 1,
      title: "First Coffee Together",
      date: "A cozy morning",
      description: "It was just a simple coffee, but somehow the steam rising from the mugs and the quiet chatter around us made it feel like something timeless.",
      icon: Heart,
      color: "from-soft-pink to-blush-pink",
      screenshot: "https://source.unsplash.com/400x300/?coffee,table"
    },
    {
      id: 2,
      title: "Stargazing Night",
      date: "An evening full of wonder",
      description: "We looked up at the sky, counting stars until we lost track. The universe felt endless, yet calm enough to make us forget time.",
      icon: Sparkles,
      color: "from-lavender to-soft-purple",
      screenshot: "https://source.unsplash.com/400x300/?stars,night"
    },
    {
      id: 3,
      title: "Sunny Park Walk",
      date: "A warm afternoon",
      description: "Walking through the park with laughter echoing around us, the trees swayed gently as if they too were part of the moment.",
      icon: MapPin,
      color: "from-baby-blue to-lavender",
      screenshot: "https://source.unsplash.com/400x300/?park,trees"
    },
    {
      id: 4,
      title: "Quiet Reading Day",
      date: "Pages and silence",
      description: "Sometimes the best memories are the ones where nothing much happens — just two people reading side by side, lost in their own worlds but still together.",
      icon: Heart,
      color: "from-cream to-blush-pink",
      screenshot: "https://source.unsplash.com/400x300/?books,reading"
    },
    {
      id: 5,
      title: "Laughter in the Rain",
      date: "Unexpected fun",
      description: "The rain caught us by surprise, but instead of running for cover we laughed and let ourselves get soaked. It felt like freedom.",
      icon: Sparkles,
      color: "from-soft-pink to-lavender",
      screenshot: "https://source.unsplash.com/400x300/?rain,smile"
    },
    {
      id: 6,
      title: "Chasing Sunsets",
      date: "Colors fading away",
      description: "We found ourselves racing against the clock to catch the last light of the day. The sunset painted everything gold, and for a moment, nothing else mattered.",
      icon: Heart,
      color: "from-lavender to-baby-blue",
      screenshot: "https://source.unsplash.com/400x300/?sunset,sky"
    },
    {
      id: 7,
      title: "Surprise Picnic",
      date: "An afternoon treat",
      description: "A blanket, some snacks, and laughter under the open sky. The simplicity of it all made it unforgettable.",
      icon: Heart,
      color: "from-blush-pink to-baby-blue",
      screenshot: "https://source.unsplash.com/400x300/?picnic,food"
    },
    {
      id: 8,
      title: "Winter Warmth",
      date: "Chilly outside, cozy inside",
      description: "Cold winds outside, but wrapped in blankets with hot drinks inside, it felt like the world had paused just for us.",
      icon: Sparkles,
      color: "from-soft-purple to-lavender",
      screenshot: "https://source.unsplash.com/400x300/?winter,cozy"
    }
  ];

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-baby-blue/25 via-cream to-soft-purple/30 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-soft-pink mx-auto mb-4" />
          <h2 className="handwriting text-2xl sm:text-3xl text-soft-pink mb-2">Shared Memories</h2>
          <p className="serif text-base sm:text-lg text-foreground/70">A collection of little moments that make life brighter 🌸</p>
        </div>

        <div className="space-y-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="animate-slide-in bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-soft-pink/20 hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
                {/* Icon and Memory Info */}
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${memory.color} flex items-center justify-center shadow-lg`}>
                    <memory.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="handwriting text-xl sm:text-2xl text-soft-pink mb-2">
                      {memory.title}
                    </h3>
                    
                    {memory.date && <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-3 space-y-1 sm:space-y-0">
                      <div className="flex items-center space-x-2 text-foreground/60">
                        <Calendar className="w-4 h-4" />
                        <span className="serif text-sm">{memory.date}</span>
                      </div>
                    </div>}
                    
                    <p className="serif text-base text-foreground/80 leading-relaxed">
                      {memory.description}
                    </p>
                  </div>
                </div>

                {/* Optional Screenshot */}
                {memory.screenshot && (
                  <div className="flex-shrink-0 lg:w-48 w-full">
                    <div className="relative group">
                      <div className="bg-gradient-to-br from-soft-pink/20 to-lavender/20 rounded-2xl p-2 shadow-lg">
                        <img
                          src={memory.screenshot}
                          alt={`Memory: ${memory.title}`}
                          className="w-full h-full object-cover rounded-xl shadow-md"
                        />
                        
                        {/* Screenshot overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                          <button
                            onClick={() => openImageModal(memory.screenshot!)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            <Eye className="w-5 h-5 text-soft-pink" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Screenshot indicator */}
                      <div className="absolute top-0 right-0 bg-soft-pink text-white rounded-full p-1 transform translate-x-1 -translate-y-1 shadow-md">
                        <Camera className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-soft-pink/20 max-w-2xl mx-auto">
            <div className="flex justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-soft-pink animate-heartbeat" style={{ animationDelay: '0s' }} />
              <Heart className="w-6 h-6 text-lavender animate-heartbeat" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-6 h-6 text-baby-blue animate-heartbeat" style={{ animationDelay: '1s' }} />
            </div>
            <h3 className="handwriting text-2xl text-soft-pink mb-4">Looking Forward</h3>
            <p className="serif text-base text-foreground/80">
              These are just glimpses of beautiful times. The best part is knowing there are countless more to come, waiting to be lived and remembered.
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-60 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 shadow-2xl">
              <img
                src={selectedImage}
                alt="Memory screenshot"
                className="w-full h-full object-contain rounded-2xl max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
