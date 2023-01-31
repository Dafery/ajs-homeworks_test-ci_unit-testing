import getCharStatus from '../characterStatus';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 45 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])('Здоровье персонажа', (input, expected) => {
  const received = getCharStatus(input);

  expect(received).toBe(expected);
});
