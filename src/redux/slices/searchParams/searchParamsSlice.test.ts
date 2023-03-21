import reducer, { increaseStartIndex, resetStartIndex, setCategory, setSearchFild, setSortBy } from "./searchParamsSlice"

describe('Тесты для searchParamsSlice', () => {

    const prevState = {
        category: 'all',
        sortBy: 'relevance',
        searchFild: '',
        maxResults: 30,
        startIndex: 0,
    }

    it('должен изменять состояние категории', () => {
        expect(reducer(prevState, setCategory('art')).category).toBe('art')
    })

    it('должен изменять состояние сортировки', () => {
        expect(reducer(prevState, setSortBy('newest')).sortBy).toBe('newest')
    })

    it('должен изменять состояние поля поиска', () => {
        expect(reducer(prevState, setSearchFild('test')).searchFild).toBe('test')
    })

    it('должен увеличивать startIndex', () => {
        expect(reducer(prevState, increaseStartIndex()).startIndex).toBe(30)
    })

    it('должен увеличивать startIndex', () => {
        expect(reducer(prevState, resetStartIndex()).startIndex).toBe(0)
    })
})