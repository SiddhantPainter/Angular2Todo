import { Angular2todosPage } from './app.po';

describe('angular2todos App', () => {
  let page: Angular2todosPage;

  beforeEach(() => {
    page = new Angular2todosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
