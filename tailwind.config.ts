import type { Config } from 'tailwindcss';

// "Terminal night": deep navy + mint (secure / green pipeline) + sky blue.
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: '#0B1120', panel: '#111A2E', line: '#1E2A44' },
        ink: { DEFAULT: '#E5E9F2', soft: '#CBD5E1', muted: '#94A3B8' },
        mint: { DEFAULT: '#34D399', dark: '#052E1F' },
        sky: { DEFAULT: '#60A5FA' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
