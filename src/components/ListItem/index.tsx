import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../Checkbox';

export interface ListItemProps {
    index: number;
    text: string;
    checked?: boolean;
    last?: boolean;
};

const ItemWrapper = styled.div<Pick<ListItemProps, 'last'>>`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.colors.offsetBg};

    &::after {
        display: ${props => props.last ? 'none': 'block'};
        content: '';
        width: calc(100% - 2rem);
        height: 1px;
        background-color: ${props => props.theme.colors.lightGray};
        position: absolute;
        bottom: 0;
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

export const ListItem: React.FC<ListItemProps> = ({ text, index, checked: done, last }) => {
    const [checked, setChecked] = React.useState<boolean>(!!done)

    return (
        <ItemWrapper last={last}>
            <Checkbox checked={checked} onChange={() => setChecked(prev => !prev)} />
            <StyledText checked={checked}>
                {text}
            </StyledText>
        </ItemWrapper>
    );
}