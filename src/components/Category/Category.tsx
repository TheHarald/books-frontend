import React from 'react';
import styled from 'styled-components';

type CategoryProps = {
    text: string
};

const StyledCategory = styled.span`
    background: #ECF2FF;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #1E5EFF;
`

function Category(props: CategoryProps) {
    return (
        <StyledCategory>
            {props.text}
        </StyledCategory>
    );
}

export default Category;