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

  it('allows users to input email', () => {
    
  });

  it('allows users to input password', () => {
    
  });

  it('displays loading component when userStatus is loading', () => {
    
  });

  it('displays error message when registration fails', () => {
    
  });

  it('displays success message when registration succeeds', () => {
    
  });

  it('calls dispatch with correct data when signup button is clicked', () => {
    
  });

  it('handles userStatus changes properly', () => {
    
  });

  
});
