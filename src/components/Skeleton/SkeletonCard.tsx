import React from 'react';
import styled from 'styled-components';
import Skeleton from './Skeleton';

type SkeletonCardProps = {};

const StyledSkeletonCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 240px;
`;

function SkeletonCard(props: SkeletonCardProps) {
    return (
        <StyledSkeletonCard>
            <Skeleton width={200} height={200} />
            <Skeleton width={200} />
            <Skeleton width={100} />
        </StyledSkeletonCard>
    );
}

export default SkeletonCard;