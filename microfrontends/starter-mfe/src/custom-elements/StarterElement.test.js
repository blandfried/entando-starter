import { render, screen } from '@testing-library/react';
import StarterElement from './StarterElement';

test('renders learn react link', () => {
  render(<StarterElement />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
