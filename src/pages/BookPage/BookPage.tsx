import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AuthorNames from '../../components/AuthorNames/AuthorNames';
import Category from '../../components/Category/Category';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import Skeleton from '../../components/Skeleton/Skeleton';
import { useGetBookByIdQuery } from '../../redux/slices/books/booksApi';

type BookPageProps = {};

const StyledBookPage = styled.article`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 14px;
    background: #FFF;
    border-radius: 6px;
    color: #1E5EFF;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-decoration: none;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-start;
`

const StyledHeaderTitle = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #131523;
    @media screen and (min-width: 425px) and (max-width: 768px) {
        font-size: 24px;
        line-height: 27px;
    }

    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 18px;
        line-height: 21px;
    }
`

const StyledBookInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    @media screen  and (max-width: 768px) {
       flex-direction: column;
    }
    
`

const StyledImageContainer = styled.div`
    background-color: #ECF2FF;
    padding: 100px;
    border-radius: 32px;
    align-self: center;
    @media screen and (min-width: 425px) and (max-width: 768px) {
        padding: 40px;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        padding: 20px;
        border-radius: 16px;
    }
`

const StyledImage = styled.img`
    object-fit: cover;
    width: 200px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    
`

const StyledCategoriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
`

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const StyledDescription = styled.p`
    font-size: 16px;
    line-height: 28px;
    color: #131523;
    display: inline-flex;
`

function BookPage(props: BookPageProps) {
    const { id = 'defaultBookId' } = useParams<string>();

    const { data, isLoading, error } = useGetBookByIdQuery(id)

    return (


        <StyledBookPage>
            <StyledHeader>
                <StyledLink to='/' >Back</StyledLink>
                {isLoading ? <Skeleton width={200} /> : <StyledHeaderTitle>{data && data.volumeInfo.title}</StyledHeaderTitle>}
            </StyledHeader>
            {
                isLoading ? null : data &&
                    <StyledBookInfoContainer>
                        <StyledImageContainer>
                            <StyledImage src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : 'book.png'}></StyledImage>
                        </StyledImageContainer>
                        <StyledInfo>
                            {data.volumeInfo.categories && <StyledCategoriesContainer>
                                {data.volumeInfo.categories.map((category, index) => {
                                    return <Category key={`${category}${index}`} text={category} />
                                })}
                            </StyledCategoriesContainer>}
                            <AuthorNames authors={data.volumeInfo.authors} />
                            {data.volumeInfo.description && <StyledDescription  >
                                {data.volumeInfo.description.replace(/(<([^>]+)>)/gi, '')}
                            </StyledDescription>}
                        </StyledInfo>
                    </StyledBookInfoContainer>
            }
            {isLoading ? <Loader /> : null}
            {error ? <ErrorMessage text={'Ошибка'} /> : null}
        </StyledBookPage>

    );
}

export default BookPage;