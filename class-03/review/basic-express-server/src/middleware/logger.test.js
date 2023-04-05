const loggerMessage = require('./logger');

describe('Testing the logger middleware', () => {
  test('Should pass the request object to the next middleware if name is present in the query', () => {
    const request = {
      query: {
        name: 'Kameron'
      }
    };
    const response = {};
    const next = jest.fn();

    loggerMessage(request, response, next);

    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith();
    expect(request.query.name).toEqual('Kameron');
  });

  test('Should call next with an error message if name is not present in the query', () => {
    const request = {
      query: {}
    };
    const response = {};
    const next = jest.fn();

    loggerMessage(request, response, next);

    expect(next).toHaveBeenCalled();
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith('Please type a name');
  });
});
