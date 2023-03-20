import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './redux/utilsForTests';
import { setupStore } from './redux';
import { Provider } from 'react-redux';

describe('Test App component', () => {

  it('заголовок должен отображаться в дприложении', () => {
    const store = setupStore()
    renderWithProviders(<App />)
    const linkElement = screen.getByText(/search/i);
    expect(linkElement).toBeInTheDocument();
  });

})
