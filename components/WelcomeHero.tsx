
import React from 'react';

export const WelcomeHero: React.FC = () => {
  return (
    <div className="text-center px-4">
      <h1 className="text-7xl md:text-9xl font-serif italic mb-4 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-100 bg-clip-text text-transparent select-none">
        Welcome
      </h1>
      <p className="text-zinc-400 text-lg md:text-xl font-light tracking-wide max-w-md mx-auto leading-relaxed">
        Experience simplicity reimagined through the lens of modern design principles.
      </p>
      <div className="mt-12">
        <div className="inline-block h-1 w-12 bg-zinc-800 rounded-full"></div>
      </div>
    </div>
  );
};
