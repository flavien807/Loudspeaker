import { WebPlugin } from '@capacitor/core';

import type { LoudspeakerPlugin } from './definitions';

export class LoudspeakerWeb extends WebPlugin implements LoudspeakerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
