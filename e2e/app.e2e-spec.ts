import { Ng4PipesPage } from './app.po';

describe('ng4-pipes App', () => {
  let page: Ng4PipesPage;

  beforeEach(() => {
    page = new Ng4PipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
