import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
=======
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
  }
}
