import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // import the provider
import store from '../redux/store';
import Login from './Login';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(), // Mock useNavigate as a jest function
}));

test('Login Should display a Loading button', () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const button = screen.getByText('Login');
  const textElement = screen.getByText('BOOK A CONCERT APP');
  expect(button).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
});
