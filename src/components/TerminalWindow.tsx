import { useTypingAnimation } from '../hooks/useTypingAnimation';

const terminalCommands = [
  { prompt: '❯', command: 'whoami', output: 'Rakesh Kumar Sharma' },
  { prompt: '❯', command: 'cat role.txt', output: 'Java Developer & Microservices Architect' },
  { prompt: '❯', command: 'cat experience.txt', output: '4+ years building scalable enterprise solutions' },
  { prompt: '❯', command: 'ls skills/', output: 'Java Spring-Boot NodeJS AWS Docker Kubernetes Kafka' }
];

export default function TerminalWindow() {
  const typingText = useTypingAnimation('exploring_portfolio.sh', 2000);

  return (
    <div className="glass-card rounded-xl overflow-hidden max-w-3xl mx-auto shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-[var(--bg-secondary)] px-6 py-4 flex items-center gap-3" style={{borderBottom: '1px solid var(--border-color)'}}>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-6 text-[var(--text-secondary)] font-mono text-sm">rakesh@portfolio:~$</div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-8 font-mono">
        <div className="space-y-4">
          {terminalCommands.map((cmd, index) => (
            <div key={index}>
              <div className="flex items-center">
                <span className="text-[var(--accent-green)] mr-3">{cmd.prompt}</span>
                <span className="text-[var(--accent-blue)]">{cmd.command}</span>
              </div>
              <div className="text-[var(--text-primary)] ml-6">{cmd.output}</div>
            </div>
          ))}
          
          <div className="flex items-center">
            <span className="text-[var(--accent-green)] mr-3">❯</span>
            <span className="text-[var(--accent-blue)] typing-cursor">{typingText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
