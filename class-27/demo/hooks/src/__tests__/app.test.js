import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react'

describe('Testing the root App component', () => {
  test('Can display a new Note', () => {
    render(
      <App />
    );

    let titleEl = screen.getByTestId('title-input');
    expect(titleEl).toBeVisible();
    // update title El with input
    fireEvent.change(titleEl, { target: { value: 'test title' } });
    let textEl = screen.getByTestId('text-input');
    expect(textEl).toBeVisible();
    // update the text El with input
    fireEvent.change(textEl, { target: { value: 'test text' } });
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('test title')).toBeVisible();
    expect(screen.getByText('test text')).toBeVisible();
  });
})
