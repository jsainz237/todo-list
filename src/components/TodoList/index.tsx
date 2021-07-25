import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../_state/hooks';
import { 
    accessibilitySelector,
    toggle as toggleAccommodations,
} from '../../_state/reducers/accessibility.reducer';
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

    & > .list {
        border-radius: 1rem;
        overflow: hidden;
    }
`;

const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding: 0 1rem;
    margin: 1rem 0;
`;

const StyledOptionButton = styled.button<{ active?: boolean }>`
    padding: 0 0.75rem;
    border-radius: 2rem;
    border: 1px solid ${props => props.active ? props.theme.colors.active : props.theme.colors.fg};
    background: ${props => props.active ? props.theme.colors.active : 'transparent'};
    color: ${props => props.active ? 'white' : props.theme.colors.fg};
    box-shadow: none;
`;

export const TodoList: React.FC = () => {
    const { accommodations } = useAppSelector(accessibilitySelector);
    const dispatch = useAppDispatch();

    const [listItems, setListItems] = React.useState<
        (Pick<ListItemProps, 'text' | 'checked'> & { id: string })[]
    >([]);

    // on component did mount, initialize list from local storage
    React.useEffect(() => {
        const persistedList = localStorage.getItem(LS_LIST_KEY);
        if(persistedList) {
            setListItems(JSON.parse(persistedList));
            return;
        }

        const firstTimeList = [
            { id: uuidv4(), text: "Welcome to my todo list demo" },
            { id: uuidv4(), text: `Input an item at the top and press Enter to add a list item` },
            { id: uuidv4(), text: "Click on the left circle to mark something as done", checked: true },
            { id: uuidv4(), text: "Click on the \u2A09 to the right to delete an item" },
        ];

        setListItems(firstTimeList);
    }, []);

    // everytime list is updated, write to local storage
    React.useEffect(() => {
        localStorage.setItem(LS_LIST_KEY, JSON.stringify(listItems));
    }, [listItems])

    /** Append item to todo list */
    const appendItem = (text: string) => {
        setListItems(prev => [{
            id: uuidv4(),
            text
        }, ...prev]);
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <h1>Todo List</h1>
                <StyledOptionButton
                    title="toggle accessibility accomodations"
                    aria-label="toggle accessibility accomodations"
                    active={accommodations}
                    onClick={() => dispatch(toggleAccommodations())}
                    style={{ padding: '0 8px', marginBottom: '0.8rem', fontSize: '1.1rem' }}
                >
                    <i className="fas fa-universal-access"></i>
                </StyledOptionButton>
            </div>
            <ListInput appendToList={appendItem} />
            <ListContainer>
                <ListWrapper>
                    <div className="list">{
                        listItems.map(({ id, text, checked }, index) => (
                            <ListItem 
                                key={id}
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