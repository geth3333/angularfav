import { AngtuPage } from './app.po';

describe('angtu App', () => {
  let page: AngtuPage;

  beforeEach(() => {
    page = new AngtuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
