import { WebPlugin } from '@capacitor/core';
import type { LoudspeakerPlugin } from './definitions';
export declare class LoudspeakerWeb extends WebPlugin implements LoudspeakerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    setAudioMode(options: {
        mode: 'speaker' | 'earpiece';
    }): Promise<{
        success: boolean;
    }>;
}
