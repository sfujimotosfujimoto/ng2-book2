import { Ng2Book1Page } from './app.po';

describe('ng2-book1 App', function() {
  let page: Ng2Book1Page;

  beforeEach(() => {
    page = new Ng2Book1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
