'use strict'

describe('Simple test', () => {
    beforeAll(() => {
        browser.get('https://www.onliner.by/');
    });

    it('should open the app', () => {
        expect(browser.getTitle()).toEqual('Onliner.by');
        console.log('Test Done!!!');
    });

    afterAll(() => {
        browser.driver.quit();
    });
});
