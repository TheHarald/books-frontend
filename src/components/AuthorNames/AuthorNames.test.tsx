import { getByText, render, screen } from "@testing-library/react"
import AuthorNames from "./AuthorNames"


describe('Тесты для компонента AuthorNames', () => {

    it('не должен отображать запятую в конце при нескольких авторах', () => {
        render(<AuthorNames authors={['John', 'Jafry']} />)
        const authors = screen.getByText('John, Jafry')
        expect(authors.textContent).toBe('John, Jafry')
    })

    it('если авторов нет то не отрисовывать', () => {
        render(<AuthorNames />)
        const authors = screen.queryByTestId('AuthorNames')
        expect(authors).not.toBeInTheDocument()
    })

    it('если передан один автор, то запятая не должна быть в конце', () => {
        render(<AuthorNames authors={['One']} />)
        const authors = screen.queryByTestId('AuthorNames')
        expect(authors?.textContent).toBe('One')
    })


})