import Footer from '.';
import { render, screen } from '@testing-library/react';

describe('Testing the footer component', () => {
  test('Should display a Copyright with year', () => {
    render(<Footer year="2023" />);

    expect(screen.getByText(/Made by 401d52/i)).toBeVisible();
    expect(screen.getByText(/2023/i)).toBeVisible();
  });
});
