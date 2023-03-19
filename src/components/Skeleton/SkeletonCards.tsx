import React from 'react';
import styled from 'styled-components';
import SkeletonCard from './SkeletonCard';


function SkeletonCards() {
    return (
        <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </>
    );
}

export default SkeletonCards;