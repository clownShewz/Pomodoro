import { PomodoroPage } from './app.po';

describe('pomodoro App', () => {
  let page: PomodoroPage;

  beforeEach(() => {
    page = new PomodoroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
