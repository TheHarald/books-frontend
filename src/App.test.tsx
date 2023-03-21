import React from 'react';
import { getByText, queryByTestId, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './redux/utilsForTests';
import { server } from './mock/api/server';
import userEvent from '@testing-library/user-event';



describe('Test App component', () => {
  it('заголовок должен отображаться в дприложении', () => {
    renderWithProviders(<App />)
    const linkElement = screen.getByText(/search/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('запрос книг должен показывать лоадер и скрывать его когда запрос заончится и отобразить данные', async () => {
    const { store } = renderWithProviders(<App />)
    expect(screen.queryByTestId('loader')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
      expect(screen.queryAllByTestId('book-card')).not.toBe(0)
    })
  });


  it('при нажатии на карточку осуществляется переход на страницу книги', async () => {
    const { store } = renderWithProviders(<App />)
    expect(screen.queryByTestId('loader')).toBeInTheDocument()
    await waitFor(async () => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
      expect(screen.queryAllByTestId('book-card').length).not.toBe(0)
      userEvent.click(screen.queryAllByTestId('book-card')[0])
      expect(window.location.pathname).toContain('/books/')
    })
  });

})
