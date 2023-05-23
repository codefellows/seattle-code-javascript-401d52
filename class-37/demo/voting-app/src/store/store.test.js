import createStore from './index';

describe('Testing our redux store', () => {
  test('Can create initial State object', () => {

    const store = createStore();
    expect(store).toBeTruthy();

    let currentState = store.getState();
    expect(currentState.totalVotes).toEqual(0);
    expect(currentState.candidates.length).toEqual(5);
    expect(currentState.roles.length).toEqual(2);
    expect(currentState.candidates[0].votes).toEqual(0);
  });

  test('Should increment votes for a given candidate', () => {
    const store = createStore();

    store.dispatch({
      type: 'INCREMENT_VOTE',
      payload: {name:'Jacob', role: 'instructor'}
    });


    let currentState = store.getState();
    console.log(currentState);
    expect(currentState.totalVotes).toEqual(1);
    expect(currentState.candidates[0].votes).toEqual(1);
    expect(currentState.roles[0].hasVoted).toEqual(true);
  });

  test('Should decrement votes for a given candidate', () => {
    const store = createStore();

    store.dispatch({
      type: 'INCREMENT_VOTE',
      payload: { name: 'Jacob', role: 'instructor' }
    });
    store.dispatch({
      type: 'DECREMENT_VOTE',
      payload: { name: 'Jacob', role: 'instructor' }
    });

    let currentState = store.getState();
    console.log(currentState);
    expect(currentState.totalVotes).toEqual(0);
    expect(currentState.roles[0].hasVoted).toEqual(false);
    expect(currentState.candidates[0].votes).toEqual(0);
  });
});
