const LinkedList = require('./');

describe('Testing the Linked List', () => {
  test('Can add value to the end', () => {
    let list = new LinkedList();

    list.add(1);
    list.add(2);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
  });

  test('Can get an array of values', () => {
    let list = new LinkedList();

    list.add(1);
    list.add(2);

    let values = list.values();

    expect(values[0]).toEqual(1);
    expect(values[1]).toEqual(2);
  });
});
