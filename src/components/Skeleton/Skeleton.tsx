import React from 'react';
import styled from 'styled-components';

type SkeletonProps = {
    width: number;
    height?: number
};

const StyledSkeleton = styled.div<SkeletonProps>`
    height: ${props => props.height ? props.height : 40}px;
    width: ${props => props.width ? props.width : 80}px;
    border-radius: 8px;
    background: #E6E9F4;
    animation: pulse 1s linear infinite;

    @keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
`;

function Skeleton(props: SkeletonProps) {
    return (
        <StyledSkeleton {...props} >
        </StyledSkeleton>
    );
}

export default Skeleton;