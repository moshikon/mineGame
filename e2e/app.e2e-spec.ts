import { MineGamePage } from './app.po';

describe('mine-game App', function() {
  let page: MineGamePage;

  beforeEach(() => {
    page = new MineGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
