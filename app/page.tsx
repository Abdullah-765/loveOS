'use client'
import { useState, } from 'react';
import { BootScreen } from '@/components/boot-screen';
import { Desktop } from '@/components/desktop';

  export default function App() {
  const [isBooted, setIsBooted] = useState(false);

  const handleBootComplete = () => {
    setIsBooted(true);
  };

  return (
    <div className="min-h-screen">
      {!isBooted ? (
        <BootScreen onBootComplete={handleBootComplete} />
      ) : (
        <Desktop />
      )}
    </div>
    )
  }
