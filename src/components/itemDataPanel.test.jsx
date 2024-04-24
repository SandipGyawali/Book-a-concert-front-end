import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import ItemDataPanel from './ItemDataPanel';

const props = {
  concert: {
    title: 'Luffy Party',
    organizer: 'Mugiwara',
    description: 'Incredible concert with Luffy to celebrate he is pirate king.',
    price: '100',
    date: '2022-12-31',
    city: 'City',
    organizer_name: 'Mugiwara',
  },
};

describe('ItemDataPanel Component', () => {
  it('renders without crashing', () => {
    // Arrange, Act and assert,test would fail if render throws an error
    render(
      <Provider store={store}>
        <Router>
          <ItemDataPanel concert={props.concert}/>
        </Router>
      </Provider>
    );
  });

  it('renders the concert title', () => {
    // Arrange
    render(
      <Provider store={store}>
        <Router>
          <ItemDataPanel concert={props.concert}/>
        </Router>
      </Provider>
    );
    // Act
    const title = screen.getByText('Luffy Party');
    // Assert
    expect(title).toBeInTheDocument();
  });

  it('renders the concert description', () => {
    // Arrange
    render(
      <Provider store={store}>
        <Router>
          <ItemDataPanel concert={props.concert}/>
        </Router>
      </Provider>
    );
    const description = 'Incredible concert with Luffy to celebrate he is pirate king.';
    // Act
    const descriptionElement = screen.getByText(description);
    // Assert
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the concert organizer name', () => {
    // Arrange
    render(
      <Provider store={store}>
        <Router>
          <ItemDataPanel concert={props.concert}/>
        </Router>
      </Provider>
    );
    const organizer = 'Mugiwara';
    // Act
    const organizerElement = screen.getByText(organizer);
    // Assert
    expect(organizerElement).toBeInTheDocument();
  });

  it.skip('renders the concert date', () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip('renders the concert city', () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip('renders the concert price', () => {
    // Arrange
    // Act
    // Assert
  });

  it.skip('triggers handleReserveClick when Reserve button is clicked', () => {
    // Arrange
    // Act
    // Assert
  });
});
