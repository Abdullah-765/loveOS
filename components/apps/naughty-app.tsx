'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Heart, Lock, Unlock, X, Sparkles, Eye, Brain, AlertTriangle, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function NaughtySecretsApp() {
  const [isPunished, setIsPunished] = useState(true);
  const [showPunishmentDialog, setShowPunishmentDialog] = useState(false);
  const [isFirstAccess, setIsFirstAccess] = useState(true);
  const [showRiddleModal, setShowRiddleModal] = useState(false);
  const [selectedDare, setSelectedDare] = useState<number | null>(null);
  const [riddleAnswer, setRiddleAnswer] = useState('');
  const [unlockedDares, setUnlockedDares] = useState<Set<number>>(new Set());
  const [showDareContent, setShowDareContent] = useState(false);
  const [riddleError, setRiddleError] = useState('');

  useEffect(() => {
    // Check if punishment has been lifted before
    const punishmentStatus = localStorage.getItem('naughty-app-punishment');
    const unlockedDaresData = localStorage.getItem('unlocked-dares');
    
    if (punishmentStatus === 'lifted') {
      setIsPunished(false);
      setIsFirstAccess(false);
    }
    
    if (unlockedDaresData) {
      setUnlockedDares(new Set(JSON.parse(unlockedDaresData)));
    }
  }, []);

  useEffect(() => {
    if (isFirstAccess && isPunished) {
      setShowPunishmentDialog(true);
    }
  }, [isFirstAccess, isPunished]);

  const liftPunishment = () => {
    setIsPunished(false);
    setShowPunishmentDialog(false);
    setIsFirstAccess(false);
    localStorage.setItem('naughty-app-punishment', 'lifted');
  };

  const closePunishmentDialog = () => {
    setShowPunishmentDialog(false);
  };

const secretMessages = [
  {
    title: "The Thought of a Kiss",
    content: "Sometimes I catch myself daydreaming about a kiss that lingers a little longer than it should — soft, warm, and unforgettable."
  },
  {
    title: "Touch of Imagination",
    content: "Ever wonder how a simple touch could send shivers down your spine? Just the thought is enough to make my heart race."
  },
  {
    title: "The Power You Hold",
    content: "You have this effect on me — one smile and suddenly I forget how to keep my cool. It’s like magic I can’t resist."
  },
  {
    title: "Secret Fantasies",
    content: "Some fantasies are sweet, some are daring, and most are a mix of both. I’ll admit — I think about them more than I should."
  },
  {
    title: "Afterglow",
    content: "There’s something about imagining the quiet after the storm — laughter, heavy breaths, and that calm where nothing else matters."
  }
];


const naughtyDares = [
  {
    id: 1,
    dare: "Describe your dream date in detail (make it steamy or sweet).",
    riddle: "I can be candlelit, adventurous, casual, or wild. I bring people closer together and can be romantic or fun. What am I?",
    answer: "date"
  },
  {
    id: 2,
    dare: "Send one flirty line that would make anyone blush instantly.",
    riddle: "I can make someone laugh, smile, or hide their face. Short, playful, and sometimes cheesy. What am I?",
    answer: "pickup line"
  },
  {
    id: 3,
    dare: "Share one fantasy you’ve never admitted before (no holding back).",
    riddle: "I live in your mind, sometimes sweet, sometimes spicy. I can be a wish, a story, or a hidden desire. What am I?",
    answer: "fantasy"
  },
  {
    id: 4,
    dare: "Describe in detail your perfect cuddle scenario.",
    riddle: "I’m warm, soft, and close. People do me when they want comfort or affection. What am I?",
    answer: "cuddle"
  },
  {
    id: 5,
    dare: "Tell me one playful dare you’d give back to me.",
    riddle: "I’m a challenge, sometimes silly, sometimes daring. People often play me in truth-or-dare. What am I?",
    answer: "dare"
  },
  {
    id: 6,
    dare: "Name one song that makes you think of passion and why.",
    riddle: "I have lyrics and melody, I can be loud or soft, and I often carry feelings better than words. What am I?",
    answer: "song"
  },
  {
    id: 7,
    dare: "If we were in a movie, what scene would you cast us in?",
    riddle: "I’m shown on a screen, full of stories and drama. Sometimes I’m romantic, sometimes thrilling. What am I?",
    answer: "movie"
  },
  {
    id: 8,
    dare: "Write a playful short story that includes us in it (spicy or silly).",
    riddle: "I’m made up of words, I can be long or short, and I can transport you into any world. What am I?",
    answer: "story"
  },
  {
    id: 9,
    dare: "Tell me your most romantic idea for a surprise night together.",
    riddle: "I’m something unexpected that brings joy, shock, or even laughter. People love me on birthdays. What am I?",
    answer: "surprise"
  },
  {
    id: 10,
    dare: "Whisper (or type) something you’ve wanted to say but never did.",
    riddle: "I’m soft, low, and often full of secrets. Lovers lean in to share me quietly. What am I?",
    answer: "whisper"
  }
];


  const handleDareClick = (dareId: number) => {
    if (unlockedDares.has(dareId)) {
      setSelectedDare(dareId);
      setShowDareContent(true);
    } else {
      setSelectedDare(dareId);
      setShowRiddleModal(true);
      setRiddleAnswer('');
      setRiddleError('');
    }
  };

  const handleRiddleSubmit = () => {
    if (!selectedDare) return;
    
    const dare = naughtyDares.find(d => d.id === selectedDare);
    if (dare && riddleAnswer.toLowerCase().trim() === dare.answer.toLowerCase()) {
      const newUnlockedDares = new Set(unlockedDares);
      newUnlockedDares.add(selectedDare);
      setUnlockedDares(newUnlockedDares);
      localStorage.setItem('unlocked-dares', JSON.stringify([...newUnlockedDares]));
      
      setShowRiddleModal(false);
      setShowDareContent(true);
      setRiddleAnswer('');
      setRiddleError('');
    } else {
      setRiddleError('Wrong answer! Think more... spicily 😈');
    }
  };

  const closeRiddleModal = () => {
    setShowRiddleModal(false);
    setSelectedDare(null);
    setRiddleAnswer('');
    setRiddleError('');
  };

  const closeDareContent = () => {
    setShowDareContent(false);
    setSelectedDare(null);
  };

  if (showPunishmentDialog) {
    return (
      <div className="min-h-full bg-gradient-to-br from-red-500/20 via-pink-500/20 to-purple-500/20 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-400/30 max-w-md w-full text-center">
          <Lock className="w-16 h-16 text-red-500 mx-auto mb-6 animate-bounce" />
          <h2 className="handwriting text-2xl text-red-500 mb-6">Oops! 🔒</h2>
          <p className="serif text-lg text-foreground/80 mb-8 leading-relaxed">
            Are mein toh punishment pe hun na app kaise khulega 😅
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={liftPunishment}
              className="w-full h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white rounded-full handwriting text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Lift Punishment 🔓
            </Button>
            <Button 
              onClick={closePunishmentDialog}
              variant="outline"
              className="w-full h-12 border-2 border-red-400 text-red-500 hover:bg-red-50 rounded-full handwriting text-lg transition-all duration-300"
            >
              Close ❌
            </Button>
          </div>
          
          <p className="serif text-xs text-foreground/60 mt-6 italic">
            (Someone has been naughty... 😈)
          </p>
        </div>
      </div>
    );
  }

  if (isPunished) {
    return (
      <div className="min-h-full bg-gradient-to-br from-red-500/20 via-pink-500/20 to-purple-500/20 flex items-center justify-center p-4">
        <div className="text-center">
          <Lock className="w-24 h-24 text-red-500 mx-auto mb-4 animate-pulse" />
          <h2 className="handwriting text-3xl text-red-500 mb-4">Still Locked! 🔒</h2>
          <p className="serif text-lg text-foreground/70">Punishment hasnt been lifted yet...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-red-500/15 via-pink-500/15 to-purple-500/15 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Flame className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 animate-pulse" />
            <Unlock className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="handwriting text-2xl sm:text-3xl text-red-500 mb-2">Naughty Secrets Unlocked 🔓</h2>
          <p className="serif text-base sm:text-lg text-foreground/70">Welcome to our private little world... 😈</p>
        </div>

        {/* Secret Messages Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-red-400/20 mb-8">
          <div className="text-center mb-6">
            {/* <Kiss className="w-10 h-10 text-red-500 mx-auto mb-3" /> */}
            <h3 className="handwriting text-2xl text-red-500 mb-2">Secret Confessions</h3>
            <p className="serif text-sm text-foreground/60">Things I have been dying to tell you... 🤫</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secretMessages.map((message, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-red-200/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-center mb-4">
                  <h4 className="handwriting text-xl text-red-500 mb-3">{message.title}</h4>
                </div>
                <p className="serif text-sm text-foreground/80 leading-relaxed italic">
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Riddle-Locked Dares Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-red-400/20 mb-8">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center space-x-2 mb-3">
              <Brain className="w-10 h-10 text-red-500" />
              <Lock className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="handwriting text-2xl text-red-500 mb-2">Riddle-Locked Dares</h3>
            <p className="serif text-sm text-foreground/60">Solve the spicy riddles to unlock the dares... 😏</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {naughtyDares.map((dare) => (
              <div
                key={dare.id}
                onClick={() => handleDareClick(dare.id)}
                className="bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-4 shadow-md border border-pink-200/50 hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm group-hover:animate-pulse relative">
                    {dare.id}
                    {!unlockedDares.has(dare.id) && (
                      <Lock className="absolute -top-1 -right-1 w-3 h-3 text-yellow-500 bg-white rounded-full p-0.5" />
                    )}
                  </div>
                  <div className="flex-1">
                    {unlockedDares.has(dare.id) ? (
                      <p className="serif text-sm text-foreground/80">
                        {dare.dare}
                      </p>
                    ) : (
                      <p className="serif text-sm text-foreground/60 italic">
                        🔒 Locked - Solve the riddle to unlock!
                      </p>
                    )}
                  </div>
                  {unlockedDares.has(dare.id) && (
                    <Unlock className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Sweet Message */}
        <div className="text-center mt-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-red-400/20 max-w-2xl mx-auto">
            <div className="flex justify-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-red-500 animate-heartbeat" style={{ animationDelay: '0s' }} />
              <Flame className="w-6 h-6 text-red-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-6 h-6 text-red-500 animate-heartbeat" style={{ animationDelay: '1s' }} />
            </div>
            <h3 className="handwriting text-2xl text-red-500 mb-4">Our Little Secret</h3>
            <p className="serif text-base text-foreground/80 leading-relaxed">
              This is our private space where I can be completely honest about how I feel. 
              You make me feel things I never knew were possible, and I cant wait to explore 
              this beautiful, crazy, wonderful connection we have. You are my favorite secret... 💕
            </p>
            <div className="mt-4 text-2xl">🔥💋😈</div>
          </div>
        </div>
      </div>

      {/* Riddle Modal */}
      {showRiddleModal && selectedDare && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-400/30 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <Brain className="w-12 h-12 text-red-500 animate-pulse" />
                <Lock className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="handwriting text-2xl text-red-500 mb-2">Spicy Riddle 🌶️</h3>
              <p className="serif text-sm text-foreground/60 mb-4">Solve this to unlock your dare...</p>
              
              {/* Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <span className="handwriting text-lg text-yellow-700">Warning!</span>
                </div>
                <p className="serif text-sm text-yellow-700 italic">
                  By solving this riddle, you are bound to complete the dare that follows... 😈
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200/50 mb-4">
                <p className="serif text-base text-foreground/80 leading-relaxed italic text-center">
                  {naughtyDares.find(d => d.id === selectedDare)?.riddle}
                </p>
              </div>

              <Input
                type="text"
                placeholder="Enter your answer..."
                value={riddleAnswer}
                onChange={(e) => setRiddleAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleRiddleSubmit()}
                className="w-full h-12 rounded-xl border-2 border-red-200 focus:border-red-400 bg-white/50"
              />
              
              {riddleError && (
                <p className="serif text-sm text-red-500 mt-2 text-center italic">
                  {riddleError}
                </p>
              )}
            </div>

            <div className="flex space-x-3">
              <Button
                onClick={handleRiddleSubmit}
                disabled={!riddleAnswer.trim()}
                className="flex-1 h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white rounded-full handwriting text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Unlock Dare 🔓
              </Button>
              <Button
                onClick={closeRiddleModal}
                variant="outline"
                className="h-12 px-6 border-2 border-red-400 text-red-500 hover:bg-red-50 rounded-full handwriting text-lg transition-all duration-300"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Dare Content Modal */}
      {showDareContent && selectedDare && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-red-400/30 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <Flame className="w-12 h-12 text-red-500 animate-pulse" />
                <Unlock className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="handwriting text-2xl text-red-500 mb-2">Dare Unlocked! 🔥</h3>
              <p className="serif text-sm text-foreground/60">You solved the riddle... now complete the dare! 😈</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200/50 mb-6">
              <p className="serif text-lg text-foreground/80 leading-relaxed text-center">
                {naughtyDares.find(d => d.id === selectedDare)?.dare}
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
              <p className="serif text-sm text-yellow-700 italic text-center">
                Remember: You are bound to complete this dare! No backing out now... 😏💕
              </p>
            </div>

            <Button
              onClick={closeDareContent}
              className="w-full h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white rounded-full handwriting text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              I Accept the Challenge! 💋
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}