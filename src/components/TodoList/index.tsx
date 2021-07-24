import React from 'react';
import styled from 'styled-components';
import { ListInput } from '../ListInput';
import { ListItem, ListItemProps } from '../ListItem';

const LS_LIST_KEY = 'user-todo-list';

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
`;

export const TodoList: React.FC = () => {
    const [listItems, setListItems] = React.useState<(Pick<ListItemProps, 'text' | 'checked'>)[]>([]);

    // on component did mount, initialize list from local storage
    React.useEffect(() => {
        const persistedList = localStorage.getItem(LS_LIST_KEY);
        if(persistedList) {
            setListItems(JSON.parse(persistedList));
        }
    }, []);

    // everytime list is updated, write to local storage
    React.useEffect(() => {
        localStorage.setItem(LS_LIST_KEY, JSON.stringify(listItems));
    }, [listItems])

    /** Append item to todo list */
    const appendItem = (text: string) => {
        setListItems(prev => [ ...prev, { text }]);
        localStorage.setItem(LS_LIST_KEY, JSON.stringify(listItems));
    }

    const handleToggleCheck = (index: number) => {
        const listCopy = [...listItems];
        const itemCopy = listCopy[index];
        listCopy[index] = { ...itemCopy, checked: !itemCopy.checked };
        setListItems(listCopy);
    }

    return (
        <TodoWrapper>
            <h1>Todo List</h1>
            <ListInput appendToList={appendItem} />
            <ListContainer>
                <ListWrapper>
                    {
                        listItems.map(({ text, checked }, index) => (
                            <ListItem 
                                key={`key-${index}`}
                                index={index} 
                                text={text}
                                checked={checked}
                                last={index === listItems.length - 1}
                                onCheckChange={handleToggleCheck}
                            />
                        ))
                    }
                </ListWrapper>
            </ListContainer>
        </TodoWrapper>
    );
}