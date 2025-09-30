import { spawn } from 'child_process';

const vite = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env }
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
  process.exit(1);
});

vite.on('close', (code) => {
  process.exit(code || 0);
});
