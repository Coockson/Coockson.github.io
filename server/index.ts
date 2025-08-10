// Temporary server file to run Vite dev server for client-only app
import { spawn } from 'child_process';

console.log('Starting Vite development server for client-only portfolio...');

const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit'
});

vite.on('close', (code) => {
  console.log(`Vite development server exited with code ${code}`);
});

vite.on('error', (error) => {
  console.error('Failed to start Vite development server:', error);
});