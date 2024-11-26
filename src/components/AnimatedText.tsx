import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    
    const animateText = async () => {
      await new Promise(resolve => setTimeout(resolve, delay));
      
      for (let i = 0; i <= text.length; i++) {
        timer = window.setTimeout(() => {
          setDisplayedText(text.slice(0, i));
          if (i === text.length) {
            setIsAnimationComplete(true);
          }
        }, i * 100);
      }
    };

    animateText();

    return () => {
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [text, delay]);

  return (
    <span className={`animated-text ${isAnimationComplete ? 'neon-glow' : ''} ${className}`}>
      {displayedText}
    </span>
  );
};

export default AnimatedText;