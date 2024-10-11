import { WebPlugin } from '@capacitor/core';
export class LoudspeakerWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async setAudioMode(options) {
        console.log(`setAudioMode called with mode: ${options.mode}`);
        return { success: true };
    }
}
//# sourceMappingURL=web.js.map