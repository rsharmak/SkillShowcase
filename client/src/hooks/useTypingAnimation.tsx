import { useState, useEffect } from 'react';

export function useTypingAnimation(text: string, delay: number = 1000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      setCurrentIndex(0);
      setDisplayText('');
    };

    const timer = setTimeout(startTyping, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) return;

    const typingTimer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);
    }, 100);

    return () => clearTimeout(typingTimer);
  }, [isTyping, currentIndex, text]);

  return displayText;
}
