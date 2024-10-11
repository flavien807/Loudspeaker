import { WebPlugin } from '@capacitor/core';

import type { LoudspeakerPlugin } from './definitions';

export class LoudspeakerWeb extends WebPlugin implements LoudspeakerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async setAudioMode(options: { mode: 'speaker' | 'earpiece' }): Promise<{ success: boolean }> {
    console.log(`setAudioMode called with mode: ${options.mode}`);
    return { success: true };
  }
}
