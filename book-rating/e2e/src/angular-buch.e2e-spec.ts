import { browser, element, $ } from 'protractor';

fdescribe('Angular Buch', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should just call it Angular', () => {

    browser.get('https://www.dpunkt.de/buecher/12400/9783864903571-angular.html');
    const heading = $('h1');
    expect(heading.getText()).toEqual('Angular');

  });

  afterAll(() => browser.waitForAngularEnabled(true));


});
