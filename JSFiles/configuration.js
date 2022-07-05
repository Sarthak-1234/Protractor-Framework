"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['testspec.js'],
    jasmineNodeOpts: {
        showColors: true,
    }
};
