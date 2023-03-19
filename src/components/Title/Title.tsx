import React from 'react';
import styled from 'styled-components';

type TitleProps = {
    text: string
};

const StyledTitle = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #131523;
`;

function Title(props: TitleProps) {
    return (
        <StyledTitle>
            {props.text}
        </StyledTitle>
    );
}

export default Title;