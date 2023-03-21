import { rest } from 'msw'
import { book, books } from '../mockBooks'

export const handlers = [
    rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {

        return res(ctx.json(books), ctx.delay(150))
    }),
    rest.get(`${process.env.REACT_APP_API_URL}/books/*`, (req, res, ctx) => {
        const { bookId } = req.params
        return res(ctx.json({
            volumeInfo: {
                title: 'Test Book Title',
                categories: ['Category 1', 'Category 2'],
                authors: ['Author 1', 'Author 2'],
                description: 'Test Description',
                imageLinks: {
                    thumbnail: 'https://test.com/image.png'
                }
            }
        }), ctx.delay(150))
    })
]