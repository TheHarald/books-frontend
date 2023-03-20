import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import { renderWithProviders } from "../../redux/utilsForTests"
import BookCard from "./BookCard"


describe('Тесты для компонента BookCard', () => {

    it('карточка должна отображаться', () => {
        renderWithProviders(
            <BookCard
                authors={['Janh']}
                name="Some"
                imageURL="book.png"
                id="123"
            />
        )
        const book = screen.getByTestId('book-card')
        expect(book).toBeInTheDocument()
    })

    it('при клике url должен поменяться', () => {
        renderWithProviders(
            <BookCard
                authors={['Janh']}
                name="Some"
                imageURL="book.png"
                id="123"
            />
        )

        const book = screen.getByTestId('book-card')
        act(() => {
            userEvent.click(book)
        });
        expect(window.location.pathname).toBe('/books/123');
    })




})