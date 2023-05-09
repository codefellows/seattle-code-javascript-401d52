import NoteForm from '.';
import { render, screen, fireEvent} from '@testing-library/react'


describe('Note Form Component', () => {
  test('Should take in input, and call a function on submit', () => {

    const handler = jest.fn();

    render(
      <NoteForm handleSubmit={handler}/>
    );

    let titleEl = screen.getByTestId('title-input');
    expect(titleEl).toBeVisible();
    // update title El with input
    fireEvent.change(titleEl, {target: { value: 'test title'}});
    let textEl = screen.getByTestId('text-input');
    expect(textEl).toBeVisible();
    // update the text El with input
    fireEvent.change(textEl, {target: { value: 'test text'}});
    fireEvent.click(screen.getByText('Submit'));
    expect(handler).toHaveBeenCalled();
  });
});
