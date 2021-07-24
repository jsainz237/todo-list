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
    color: ${props => props.theme.colors.fg};
`;

const ListContainer = styled.div`
    flex: 1;
    margin: 1rem 0;
`;

const ListWrapper = styled.div`
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    /* box-shadow: ${props => `${props.theme.shadow} #6e6e6e`}; */
`;

export const TodoList: React.FC = () => {
    return (
        <TodoWrapper>
            <h1>Todo List</h1>
            <ListInput />
            <ListContainer>
                <ListWrapper>
                    <ListItem index={0} text="test" />
                    <ListItem index={1} text="test" last />
                </ListWrapper>
            </ListContainer>
        </TodoWrapper>
    );
}