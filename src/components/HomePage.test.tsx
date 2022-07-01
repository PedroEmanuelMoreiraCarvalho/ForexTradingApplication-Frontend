import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('homepage components should not rendering on login',() => {
  
  const { queryByTestId } = render(<BrowserRouter><HomePage/></BrowserRouter>);

  test('deposit button is rendering', () => {
    expect(queryByTestId("deposit-button")).not.toBeInTheDocument();
  });

  test('trading component is rendering', () => {
    expect(queryByTestId("trading-component")).not.toBeTruthy();
  });
  
  test('real time quotes component is rendering', () => {
    expect(queryByTestId("real-time-quotes")).not.toBeTruthy();
  });
  
  test('trading table component is rendering', () => {
    expect(queryByTestId("trading-table")).not.toBeTruthy();
  });
});