'use strict'

const baseUri = 'https://www.onliner.by/';
const sectionsNumber = 15;
const sections = element.all(by.css('.project-navigation__item'));
const searchInput = element(by.css('.fast-search__input'));

describe('Simple test', () => {
    beforeAll(() => {
        browser.get(baseUri);
    });

    it('should have correct title', () => {
        expect(browser.getTitle()).toEqual('Onliner.by');
    });
   
    it(`should contain ${sectionsNumber} catalog sections`, () => {
        expect(sections.count()).toEqual(sectionsNumber);
    });

    it('should contain fast search input on the page', () => {
        expect(searchInput.isDisplayed()).toBeTruthy();
    });

    afterAll(() => {
        browser.driver.quit();
    });
});
