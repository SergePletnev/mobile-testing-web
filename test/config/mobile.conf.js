'use strict'

exports.config = {

    seleniumAddress: 'http://localhost:4723/wd/hub',

    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'myDevice'
    },

    specs: [require('path').resolve('./test/specs/spec.js')],

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

}