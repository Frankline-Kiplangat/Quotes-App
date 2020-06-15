import { AppPage } from './app.po';
<<<<<<< HEAD
=======
import { browser, logging } from 'protractor';
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to app!');
=======
    expect(page.getTitleText()).toEqual('Quotes-app app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
  });
});
