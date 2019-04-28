import { testing } from './module1';

test('url is correct', () => {
  expect(testing.url).toBe('https://api.example.com/path');
});
