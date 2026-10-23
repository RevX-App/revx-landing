/** Page sections in reading order. Drives the header lamps and the menu. */
import type { IconName } from './components/Icon.astro';

export const SECTIONS: { id: string; label: string; icon: IconName }[] = [
  { id: 'how', label: 'How it works', icon: 'post' },
  { id: 'trust', label: 'Trust', icon: 'lock' },
  { id: 'mechanics', label: 'Mechanics', icon: 'job' },
  { id: 'vision', label: 'Roadmap', icon: 'obd' },
  { id: 'about', label: 'About', icon: 'community' },
  { id: 'contact', label: 'Contact', icon: 'chat' },
];
