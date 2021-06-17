import { SentencecasePipe } from './sentence-case.pipe';

describe('SentencecasePipe', () => {
  it('create an instance', () => {
    const pipe = new SentencecasePipe();
    expect(pipe).toBeTruthy();
  });
});
