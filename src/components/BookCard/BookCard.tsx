import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthorNames from '../AuthorNames/AuthorNames';
import Category from '../Category/Category';

type BookCardProps = {
    categories?: string[];
    name: string;
    authors?: string[];
    imageURL: string;
    id: string
};

const StyledBookCard = styled.article`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background: #FFFFFF;
    border: 1px solid #D7DBEC;
    border-radius: 10px;
    transition: 0.3s;
    width: 300px;
    &:hover{
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
    @media screen and (min-width: 425px) and (max-width: 768px) {
       width: 180px;
       padding: 8px;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    @media screen and (min-width: 425px) and (max-width: 768px) {
       height: 180px;
    }
    @media screen and (min-width: 320px) and (max-width: 425px) {
        height: 160px;
    }
`


const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;
`

const StyledBookName = styled.h4`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #131523;
    @media screen and (min-width: 425px) and (max-width: 768px) {
        font-size: 16px;
        line-height: 19px;  
    }
`



function BookCard(props: BookCardProps) {

    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/books/${props.id}`)
    }
    return (
        <StyledBookCard data-testid='book-card' onClick={handleNavigate}>
            <StyledImage src={props.imageURL} alt={props.name}>
            </StyledImage>
            <StyledInfoContainer>
                {props.categories ? <Category text={props.categories[0]} /> : null}
                <StyledBookName>
                    {props.name}
                </StyledBookName>
                <AuthorNames authors={props.authors} />
            </StyledInfoContainer>
        </StyledBookCard>
    );
}

export default BookCard;