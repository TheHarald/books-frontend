import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './redux/utilsForTests';
import { setupStore } from './redux';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { setupServer } from 'msw/lib/node';
import { books } from './pages/MainPage/mockBooks';


export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {

    return res(ctx.json(books), ctx.delay(150))
  })
]

const server = setupServer(...handlers)


describe('Test App component', () => {

  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('заголовок должен отображаться в дприложении', () => {
    renderWithProviders(<App />)
    const linkElement = screen.getByText(/search/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('запрос', () => {
    const { store } = renderWithProviders(<App />)
    console.log(store.getState().booksApi.queries);
  });

})
