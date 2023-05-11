import Form from '../Form'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Form component', () => {
  test('Should take input, and call a function on submit', () => {
    const handler = jest.fn();

    render(
      <Form
      handleSubmit={handler}
      />
    )
    let titleEl = screen.getTestById('title-input');
    let textEl = screen.getTestById('text-input');
    fireEvent.click(screen.getByText('submit'));
    expect(handler).toHaveBeenCalled();
  })
})