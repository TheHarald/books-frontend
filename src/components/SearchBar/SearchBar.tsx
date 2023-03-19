import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/hooks';
import { setSearchFild } from '../../redux/slices/searchParams/searchParamsSlice';


type SearchBarProps = {
    inputRef: React.RefObject<HTMLInputElement>
}

const StyledSearchBar = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 18px;
    border: 1px solid var(--General60);
    border-radius: 6px;
    background: white;


    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #A1A7C4;
    appearance: none;
    outline: none;

    &:focus{
        border-color: #7E84A3;
        color: #333752;
    }

    &[type="search"]::-webkit-search-cancel-button {
        display: none;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 100%
    }

`

function SearchBar(props: SearchBarProps) {

    return (
        <StyledSearchBar ref={props.inputRef} type='search' placeholder='Search books'>
        </StyledSearchBar>
    );
}

export default SearchBar;