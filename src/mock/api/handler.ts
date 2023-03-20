import { rest } from 'msw'
import { book, books } from '../mockBooks'

export const handlers = [
    rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {

        return res(ctx.json(books), ctx.delay(150))
    }),
    rest.get(`${process.env.REACT_APP_API_URL}/:bookId`, (req, res, ctx) => {
        const { bookId } = req.params
        return res(ctx.json({
            ...book,
            id: bookId
        }), ctx.delay(150))
    })
]