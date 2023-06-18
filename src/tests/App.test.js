import { render, screen } from '@testing-library/react';
import Home from './../Routes/Home';

test('renders app title', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Practice Tests/i);
  expect(titleElement).toBeInTheDocument();
});
