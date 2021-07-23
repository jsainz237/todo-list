import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    width: 100%;
    position: relative;
    
    input {
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        background-color: ${props => props.theme.offsetBg};
        border: none;
        outline: none;
    }

    .icon-container {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 1rem;
        position: absolute;
        top: 0;
        right: 0;

        .icon {
            padding: 0 0.5rem;
            padding-top: 2px;
            background-color: ${props => props.theme.offsetBg};
            color: ${props => props.theme.fg};
            border-radius: 5px;
            border: 1px solid #cacaca;
            box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.3);
        }
    }
`;

export const ListInput: React.FC = () => (
    <InputContainer>
        <input type="text" placeholder="Add todo list item" />
        <div className="icon-container">
            <div className="icon">&#9166;</div>
        </div>
    </InputContainer>
);