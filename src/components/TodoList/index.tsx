import React from 'react';
import styled from 'styled-components';

const TodoWrapper = styled.div`
    background: red;
    height: 50%;
    width: 100%;
    max-width: ${props => props.theme.breakpoints.md};
    border-radius: 24px;
`;

export const TodoList: React.FC = () => {
    return (
        <TodoWrapper>

        </TodoWrapper>
    );
}