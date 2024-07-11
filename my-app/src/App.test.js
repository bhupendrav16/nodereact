import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders user creation header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/User creation/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Create User button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Create User/i);
  expect(buttonElement).toBeInTheDocument();
});
