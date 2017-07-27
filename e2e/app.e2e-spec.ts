import { MyClockPage } from './app.po';

describe('my-clock App', () => {
  let page: MyClockPage;

  beforeEach(() => {
    page = new MyClockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
