import React from 'react';
import { render, screen, queryByTestId } from '@testing-library/react';
import HomePage from './HomePage';

test('deposit button is rendering', () => {
  render(<HomePage />);
  const deposit_button = screen.getByText(/deposit/i);
  expect(deposit_button).toBeInTheDocument();
});

test('trading component is rendering', () => {
  const { queryByTestId } = render(<HomePage />);
  expect(queryByTestId("trading-component")).toBeTruthy();
});

test('real time quotes component is rendering', () => {
  const { queryByTestId } = render(<HomePage />);
  expect(queryByTestId("real-time-quotes")).toBeTruthy();
});

test('trading table component is rendering', () => {
  const { queryByTestId } = render(<HomePage />);
  expect(queryByTestId("trading-table")).toBeTruthy();
});