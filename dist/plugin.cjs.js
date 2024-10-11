'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Loudspeaker = core.registerPlugin('Loudspeaker', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.LoudspeakerWeb()),
});

class LoudspeakerWeb extends core.WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async setAudioMode(options) {
        console.log(`setAudioMode called with mode: ${options.mode}`);
        return { success: true };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LoudspeakerWeb: LoudspeakerWeb
});

exports.Loudspeaker = Loudspeaker;
//# sourceMappingURL=plugin.cjs.js.map
