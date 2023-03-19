import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import BookCard from '../../components/BookCard/BookCard';
import Button from '../../components/Button/Button';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import SkeletonCards from '../../components/Skeleton/SkeletonCards';
import Title from '../../components/Title/Title';
import { useAppSelector } from '../../hooks/hooks';
import { useGetBooksQuery } from '../../redux/slices/books/booksApi';
import { searchParamsSelector } from '../../redux/slices/searchParams/searchParamsSelectors';
import { increaseStartIndex } from '../../redux/slices/searchParams/searchParamsSlice';
import { BookRequestParams } from '../../types/api/booksApiRequest';
import { BooksResponse } from '../../types/api/booksApiResponse';

type MainPageProps = {};

const StyledMainPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const StyledBooksContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (min-width: 425px) and (max-width: 768px) {
        gap: 16px;  
    }
`

function MainPage(props: MainPageProps) {

    const requestParams: BookRequestParams = useAppSelector(searchParamsSelector)


    const { data, isLoading, error } = useGetBooksQuery(requestParams)

    const dispatch = useDispatch()

    function handleLoadMore() {
        dispatch(increaseStartIndex())
        window.scrollTo(0, 0)
    }
    return (
        <StyledMainPage>
            <Header />
            {data && <Title text={`Found ${data.totalItems} results`} />}
            <StyledBooksContainer>
                {isLoading && <SkeletonCards />}
                {
                    data?.items ? data.items.map((book) => {
                        return <BookCard
                            key={book.id}
                            id={book.id}
                            name={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            categories={book.volumeInfo.categories}
                            imageURL={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'book.png'}
                        />
                    }) : isLoading ? null : <Title text='Ничего не найдено' />
                }
                {isLoading ? <Loader /> : null}
            </StyledBooksContainer>
            {error ? <ErrorMessage text={'Ошибка'} /> : null}
            <Button onClick={handleLoadMore} text='Загрузить ещё' />
        </StyledMainPage>
    );
}

export default MainPage;