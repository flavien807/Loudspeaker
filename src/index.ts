import { registerPlugin } from '@capacitor/core';

import type { LoudspeakerPlugin } from './definitions';

const Loudspeaker = registerPlugin<LoudspeakerPlugin>('Loudspeaker', {
  web: () => import('./web').then((m) => new m.LoudspeakerWeb()),
});

export * from './definitions';
export { Loudspeaker };
