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
    overflow-y: auto;
`;

const ListWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow-y: auto;

    & > div {
        border-radius: 1rem;
        overflow: hidden;
    }
`;

export const TodoList: React.FC = () => {
    const [listItems, setListItems] = React.useState<(Pick<ListItemProps, 'text' | 'checked'>)[]>([]);

    // on component did mount, initialize list from local storage
    React.useEffect(() => {
        const persistedList = localStorage.getItem(LS_LIST_KEY);
        if(persistedList) {
            setListItems(JSON.parse(persistedList));
            return;
        }

        const firstTimeList = [
            { text: "Welcome to my todo list demo" },
            { text: `Input an item at the top and press Enter to add a list item` },
            { text: "Click on the left circle to mark something as done", checked: true },
            { text: "Click on the \u2A09 to the right to delete an item" },
        ];

        setListItems(firstTimeList);
    }, []);

    // everytime list is updated, write to local storage
    React.useEffect(() => {
        localStorage.setItem(LS_LIST_KEY, JSON.stringify(listItems));
    }, [listItems])

    /** Append item to todo list */
    const appendItem = (text: string) => {
        setListItems(prev => [ ...prev, { text }]);
    }

    /** callback for when an item is checked off */
    const handleToggleCheck = (itemIndex: number) => {
        const listCopy = [...listItems];
        const itemCopy = listCopy[itemIndex];
        listCopy[itemIndex] = { ...itemCopy, checked: !itemCopy.checked };
        setListItems(listCopy);
    }

    /** Callback for when an item is deleted */
    const handleDeleteItem = (itemIndex: number) => {
        const updatedList = listItems.filter((_, ind) => ind !== itemIndex);
        setListItems(updatedList);
    }

    return (
        <TodoWrapper>
            <h1>Todo List</h1>
            <ListInput appendToList={appendItem} />
            <ListContainer>
                <ListWrapper>
                    <div>{
                        listItems.map(({ text, checked }, index) => (
                            <ListItem 
                                key={`key-${index}`}
                                index={index} 
                                text={text}
                                checked={checked}
                                last={index === listItems.length - 1}
                                onCheckChange={handleToggleCheck}
                                onDeleteItem={handleDeleteItem}
                            />
                        ))
                    }</div>
                </ListWrapper>
            </ListContainer>
        </TodoWrapper>
    );
}