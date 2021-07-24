import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../Checkbox';

export interface ListItemProps {
    index: number;
    text: string;
    checked?: boolean;
    last?: boolean;
    onCheckChange: (index: number) => any;
    onDeleteItem: (index: number) => any;
};

const StyledXButton = styled.button`
    border: none;
    padding: 0;
    user-select: none;
    margin-right: 0.5rem;
    font-family: system-ui;
    font-size: 1.4rem;
    font-weight: 900;
    color: ${props => props.theme.colors.darkGray};
    background-color: transparent;
    visibility: hidden;

    &:hover {
        color: #d84a4a;
    }
`;

const ItemWrapper = styled.div<Pick<ListItemProps, 'last'>>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.colors.offsetBg};

    .start-content {
        display: flex;
        align-items: center;
    }

    &::after {
        display: ${props => props.last ? 'none': 'block'};
        content: '';
        width: calc(100% - 2rem);
        height: 1px;
        background-color: ${props => props.theme.colors.lightGray};
        position: absolute;
        bottom: 0;
    }

    &:hover > ${StyledXButton} {
        visibility: visible;
    }
`;

const StyledText = styled.div<Pick<ListItemProps, 'checked'>>`
    margin-left: 1rem;
    font-size: 1.25rem;
    font-weight: 300;
    text-decoration: ${props => props.checked && 'line-through'};
    opacity: ${props => props.checked && 0.3};
    transition: opacity 0.3s ease;
`;



export const ListItem: React.FC<ListItemProps> = ({ text, index, checked, last, onCheckChange, onDeleteItem }) => {

    return (
        <ItemWrapper last={last}>
            <div className="start-content">
                <Checkbox checked={!!checked} onChange={() => onCheckChange(index)} />
                <StyledText checked={checked}>
                    {text}
                </StyledText>
            </div>
            <StyledXButton onClick={() => onDeleteItem(index)} >&#x2A09;</StyledXButton>
        </ItemWrapper>
    );
}