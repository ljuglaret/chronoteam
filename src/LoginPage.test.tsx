import React from 'react';
import { render, screen } from '@testing-library/react';
import {FormPerson} from './LoginPage';

test('renders learn react link', () => {
  render(<FormPerson />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
