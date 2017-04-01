import { MeandemoPage } from './app.po';

describe('meandemo App', () => {
  let page: MeandemoPage;

  beforeEach(() => {
    page = new MeandemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
