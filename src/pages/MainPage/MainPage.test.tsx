import { fireEvent, screen } from "@testing-library/react";
import { setupStore } from "../../redux";
import { renderWithProviders } from "../../redux/utilsForTests";
import MainPage from "./MainPage";
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils";
import { useGetBooksQuery } from "../../redux/slices/books/booksApi";
import { books } from "./mockBooks";


describe('тесты для компоненты MainPage', () => {

    beforeAll(() => {
        window.scrollTo = jest.fn();
    })

    it('при килике на кнопку Load More должен увеличиться startIndex в хранилище', () => {
        const store = renderWithProviders(<MainPage />)

        const loadmore = screen.getByText(/load more/i)
        act(() => {
            userEvent.click(loadmore)
        });

        expect(store.store.getState().searchParams.startIndex).toBe(30)
    });

    it('заголовок должен отображаться в приложении', () => {
        const store = renderWithProviders(<MainPage />)



    });

})