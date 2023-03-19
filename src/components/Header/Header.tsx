import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/hooks';
import { setCategory, setSearchFild, setSortBy } from '../../redux/slices/searchParams/searchParamsSlice';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import Select from '../Select/Select';

type HeaderProps = {};

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const StyledTitle = styled.h1`
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #131523;
    @media screen and (min-width: 425px) and (max-width: 768px) {
        font-size: 32px;
        line-height: 36px;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 28px;
        line-height: 32px;
    }
`

const StyledSearchContainer = styled.form`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

const StyledSelectContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    @media screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
    }
`

function Header(props: HeaderProps) {

    const dispatch = useAppDispatch()
    const searchRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (searchRef.current) {
            dispatch(setSearchFild(searchRef.current.value))
        }
    }

    function handleCategory(event: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setCategory(event.target.value))
    }

    function handleSortBy(event: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setSortBy(event.target.value))
    }


    return (
        <StyledHeader>
            <StyledTitle>
                Serch for Books
            </StyledTitle>
            <StyledSearchContainer onSubmit={handleSubmit}>
                <SearchBar inputRef={searchRef} />
                <Button text='Search' />
            </StyledSearchContainer>
            <StyledSelectContainer>
                <Select onChange={handleCategory} options={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']} label='Categories' />
                <Select onChange={handleSortBy} options={['relevance ', 'newest']} label='Sorting by' />
            </StyledSelectContainer>
        </StyledHeader>
    );
}

export default Header;