import healthPlayr from '../healthPlayrs.js';

test('should healthy', () => {
  const received = healthPlayr({ name: 'Маг', health: 90 });
  expect(received).toBe('healthy');
});

test('should wounded', () => {
  const received = healthPlayr({ name: 'Маг', health: 40 });
  expect(received).toBe('wounded');
});

test('should critical', () => {
  const received = healthPlayr({ name: 'Маг', health: 10 });
  expect(received).toBe('critical');
});

test('Parameter is not a number!', () => {
  expect(() => {
    healthPlayr({});
  }).toThrow();
});

test('Parameter is not a number!', () => {
  expect(() => {
    healthPlayr({ name: 'Маг', health: 'mistake' });
  }).toThrow();
});

test('Parameter is not a number!', () => {
  expect(() => {
    healthPlayr({ name: 'Маг', health: -10 });
  }).toThrow();
});
