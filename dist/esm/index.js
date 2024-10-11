import { registerPlugin } from '@capacitor/core';
const Loudspeaker = registerPlugin('Loudspeaker', {
    web: () => import('./web').then((m) => new m.LoudspeakerWeb()),
});
export * from './definitions';
export { Loudspeaker };
//# sourceMappingURL=index.js.map