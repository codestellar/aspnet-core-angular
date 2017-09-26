import { CodestellarAppPage } from './app.po';

describe('codestellar-app App', () => {
  let page: CodestellarAppPage;

  beforeEach(() => {
    page = new CodestellarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
