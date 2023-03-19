import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './redux/utilsForTests';
import { setupStore } from './redux';
import { Provider } from 'react-redux';

test('renders learn react link', () => {

  const sotre = setupStore()
  // renderWithProviders(<App />)
  render(
    <Provider store={sotre}>
      <App />
    </Provider>
  )
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
