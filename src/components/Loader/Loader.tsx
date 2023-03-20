import React from 'react';
import styled, { keyframes } from 'styled-components';

type LoaderProps = {};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
    position: absolute;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 64px;
    height: 64px;
    &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #333752;
    border-color: #333752 transparent #333752 transparent;
    animation: ${rotate} 1.2s linear infinite;
    background-color: #F5F6FA;;
}
`;;

function Loader(props: LoaderProps) {
  return (
    <StyledLoader data-testid='loader'>
    </StyledLoader>
  );
}

export default Loader;

