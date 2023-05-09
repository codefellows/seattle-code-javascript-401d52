import CountButton from '.';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testing our button', () => {
  test('Should invoke a function on click, and display some text', () => {

    const handler = jest.fn();

    render(
      <CountButton
        handleClick={handler}
        text="test button"
      />
    );
    let buttonEl = screen.getByText('test button');
    expect(buttonEl).toBeVisible();

    fireEvent.click(buttonEl);
    expect(handler).toHaveBeenCalled();
  });
});
