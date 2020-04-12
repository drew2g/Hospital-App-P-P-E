import request from './utils/jest';

describe('app', () => {
  it('should return 200 for /', () =>
    request
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200));
});
