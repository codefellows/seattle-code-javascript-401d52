import Header from '.';
import { render, screen } from '@testing-library/react';

describe('Testing the Header component', () => {
  test('Should render a title', () => {
    render(<Header headerText="My Awesome Title" />);

    expect(screen.getByText('My Awesome Title')).toBeVisible();
  });
})
