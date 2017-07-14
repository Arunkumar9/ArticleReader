import { ArticleReaderPage } from './app.po';

describe('article-reader App', () => {
  let page: ArticleReaderPage;

  beforeEach(() => {
    page = new ArticleReaderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
