import React from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
    text: string
};

const StyledErrorMessage = styled.div`

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #F0142F;
    padding: 16px;
    background: rgba(241, 43, 67, 0.1);
    border-radius: 8px;

`;

function ErrorMessage(props: ErrorMessageProps) {
    return (
        <StyledErrorMessage>
            {props.text}
        </StyledErrorMessage>
    );
}

export default ErrorMessage;