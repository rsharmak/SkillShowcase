import { ReactNode } from 'react';

interface SkillTagProps {
  children: ReactNode;
}

export default function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="skill-tag">
      {children}
    </span>
  );
}
