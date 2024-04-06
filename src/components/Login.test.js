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

test('Login Page Should display a Login button and BOOK A CONCERT APP text', () => {
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

test('Click on Login should show \'loading\' when fetching user data', ()=> {
})

