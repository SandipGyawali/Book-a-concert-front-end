import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store  from '../redux/store';
import Signup from './Signup';

describe('Signup Component', () => {
  it('renders without crashing', () => {
    render( 
        <Provider store={store}>
          <Signup />
        </Provider>
    );
  });

  it('allows users to input name', async () => {
    // Arrange
    render( 
      <Provider store={store}>
        <Signup />
      </Provider>
  );
  // Act
  const nameInput = screen.getByPlaceholderText('Username');
  await userEvent.type(nameInput, 'Luffy');
  // Assert
  expect(nameInput).toHaveValue('Luffy');
  });

  it('allows users to input email', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <Signup />
      </Provider>
    )
    // Act
    const emailInput = screen.getByPlaceholderText('Email@example.com');
    await userEvent.type(emailInput, "luffy@pirateking.com");
    // Assert
    expect(emailInput).toHaveValue('luffy@pirateking.com');
  });

  it('allows users to input password', async () => {
    // Arrange
    render(
    <Provider store={store}>
      <Signup />
    </Provider>
    )
    // Act
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, "pirateKing123");
    // Assert
    expect(passwordInput).toHaveValue("pirateKing123");
  });

  it('displays loading component when userStatus is loading', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    // Act
    const signupBtn = screen.getByText('Signup');
    await userEvent.click(signupBtn);
    const loading = screen.getByText('Loading...');
    // Assert
    expect(loading).toBeInTheDocument();
  });

  it.skip('displays error message when registration fails', () => {
    
  });

  it.skip('displays success message when registration succeeds', () => {
    
  });

  it.skip('calls dispatch with correct data when signup button is clicked', () => {
    
  });

  it.skip('handles userStatus changes properly', () => {
    
  });

  
});
