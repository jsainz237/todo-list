import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png'

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    padding: 1rem 2rem;
    background-color: ${props => props.theme.bg};
    box-shadow: ${props => `${props.theme.shadow} ${props.theme.offsetBg}`};
`;

const StyledImg = styled.img`
    height: 2rem;
    margin-right: 2rem;
    object-fit: contain;
`;

export const Header: React.FC = () => (
    <StyledHeader>
        <StyledImg src={logo} alt="logo" />
    </StyledHeader>
);