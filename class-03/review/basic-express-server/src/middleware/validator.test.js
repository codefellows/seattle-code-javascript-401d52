const validator = require('./validator');

describe('Testing the validator middleware', () => {
  test('Should call next with an error message if name is missing from query', () => {
    const request = {
      query: {}
    };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);

    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith('No name found');
  });

  test('Should call next without any arguments if name is present in query', () => {
    const request = {
      query: {
        name: 'Kameron'
      }
    };
    const response = {};
    const next = jest.fn();

    validator(request, response, next);

    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
  });
});
