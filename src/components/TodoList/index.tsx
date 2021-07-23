import React from 'react';
import styled from 'styled-components';
import { ListInput } from '../ListInput';

const TodoWrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: ${props => props.theme.breakpoints.md};
    overflow-y: auto;
    color: ${props => props.theme.fg};
`;

export const TodoList: React.FC = () => {
    return (
        <TodoWrapper>
            <h1>Todo List</h1>
            <ListInput />
        </TodoWrapper>
    );
}