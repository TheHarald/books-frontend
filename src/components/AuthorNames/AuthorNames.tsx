import React from 'react';
import styled from 'styled-components';

type AuthorNamesProps = {
    authors?: string[]
};

const StyledAuthorNames = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #7E84A3;
`

function AuthorNames(props: AuthorNamesProps) {
    if (!props.authors) {
        return null
    }
    return (
        <StyledAuthorNames data-testid='AuthorNames'>
            {props.authors && props.authors.map((author) => {
                return `${author}, `
            }).join('').slice(0, -2)}
        </StyledAuthorNames>
    );
}

export default AuthorNames;