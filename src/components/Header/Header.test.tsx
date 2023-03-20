import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { renderWithProviders } from "../../redux/utilsForTests"
import userEvent from "@testing-library/user-event"
import Header from "./Header"


describe('Тесты для компонента Header', () => {

    it('поисковая строка должна сохранять ввод в хранилище по клику на кнопку', () => {
        const { store } = renderWithProviders(
            <Header />
        )

        const searchInput = screen.getByTestId('search')
        const button = screen.getByTestId('button')

        act(() => {
            userEvent.type(searchInput, 'test')
            userEvent.click(button)
        });
        expect(store.getState().searchParams.searchFild).toBe('test')
    })

    it('опции в селекторе должны отрисовываться', () => {
        renderWithProviders(
            <Header />
        )
        expect(screen.queryAllByTestId('option').length).not.toBe(0)
    })

    it('опции в селекторе жанра при изменении должны менять состояние хранилища', () => {
        const { store } = renderWithProviders(
            <Header />
        )

        const select = screen.getByTestId('select-Categories')
        fireEvent.change(select, { target: { value: 'art' } })
        expect(store.getState().searchParams.category).toBe('art')
    })

    it('опции в селекторе сортировки при изменении должны менять состояние хранилища', () => {
        const { store } = renderWithProviders(
            <Header />
        )

        const select = screen.getByTestId('select-Sorting by')
        fireEvent.change(select, { target: { value: 'newest' } })
        expect(store.getState().searchParams.sortBy).toBe('newest')
    })


})