import { BookRequestParams } from './../../../types/api/booksApiRequest';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Book, BooksResponse } from '../../../types/api/booksApiResponse'


export const booksApiSlice = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL || 'https://www.googleapis.com/books/v1/volumes'
    }),
    endpoints: (builder) => ({
        getBookById: builder.query<Book, string>({
            query: (bookId) => `/${bookId}?key=${process.env.REACT_APP_API_KEY}`
        }),
        getBooks: builder.query<BooksResponse, BookRequestParams>({
            query: ({ category, searchFild, sortBy, maxResults, startIndex }) => `?q=${searchFild}+${category}&orderBy=${sortBy}&maxResults=${maxResults}&startIndex=${startIndex}&key=${process.env.REACT_APP_API_KEY}`,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            merge: (currentCache, newItems) => {
                if (currentCache.items && newItems.items) {
                    console.log('merge');
                    currentCache.items.push(...newItems.items)
                }
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
        }),
    })
})


export const { useGetBooksQuery, useGetBookByIdQuery } = booksApiSlice;