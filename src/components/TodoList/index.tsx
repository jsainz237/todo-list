import React from 'react';
import styled from 'styled-components';
import { ListInput } from '../ListInput';
import { ListItem } from '../ListItem';

const TodoWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${props => props.theme.breakpoints.md};
    overflow-y: auto;
    color: ${props => props.theme.colors.fg};
`;

const ListContainer = styled.div`
    flex: 1;
    margin: 1rem 0;
`;

export const TodoList: React.FC = () => {
    return (
        <TodoWrapper>
            <h1>Todo List</h1>
            <ListInput />
            <ListContainer>
                <ListItem index={0} text="test" />
            </ListContainer>
        </TodoWrapper>
    );
}