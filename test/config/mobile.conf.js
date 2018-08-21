'use strict'

const path = require('path');

exports.config = {

    seleniumAddress: 'http://localhost:4723/wd/hub',

    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'myDevice',
        chromedriverExecutableDir: path.resolve('./test/chromeDrivers/'),
        chromedriverChromeMappingFile: path.resolve('./test/config/chromeMapping.json')
    },

    specs: [path.resolve('./test/specs/**/*.js')],

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

}
