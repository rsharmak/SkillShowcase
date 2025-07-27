import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    // Clear existing content
    container.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
      const column = document.createElement('div');
      column.style.position = 'absolute';
      column.style.left = Math.random() * 100 + '%';
      column.style.animationDelay = Math.random() * 5 + 's';
      column.style.animationDuration = (Math.random() * 3 + 2) + 's';
      column.className = 'matrix-char text-[var(--accent-green)] font-mono text-xs';
      
      let text = '';
      for (let j = 0; j < 20; j++) {
        text += characters.charAt(Math.floor(Math.random() * characters.length)) + '<br>';
      }
      column.innerHTML = text;
      container.appendChild(column);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-5"
    />
  );
}
