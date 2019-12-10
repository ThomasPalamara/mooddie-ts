import toConstCase from '../toConstCase';

describe('toConstCase', () => {
  it('should convert the string to the right format', () => {
    expect(toConstCase('landing')).toMatch('LANDING');
    expect(toConstCase('signUp')).toMatch('SIGN_UP');
  });
});
