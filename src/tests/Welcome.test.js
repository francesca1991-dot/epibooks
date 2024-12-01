import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome/Welcome.Component';

test("renders the welcome message", () => {
  render(<Welcome />);
  const alertElement = screen.getByText(/Non ti sei ancora registrato sul nostro sito/i);
  expect(alertElement).toBeInTheDocument();
});
