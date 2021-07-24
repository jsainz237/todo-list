import React from 'react';
import styled from 'styled-components';

interface ListInputProps {
    appendToList: (text: string) => any;
}

const InputContainer = styled.div`
    width: 100%;
    position: relative;
    
    input {
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
        font-size: 1.25rem;
        background-color: ${props => props.theme.colors.offsetBg};
        border: none;
        outline: none;
    }
`;

const IconContainer = styled.div<{ disabled: boolean }>`
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
        user-select: none;
        background-color: ${props => props.theme.colors.offsetBg};
        color: ${props => props.disabled ? props.theme.colors.darkGray : props.theme.colors.fg};
        border-radius: 5px;
        border: 1px solid #cacaca;
        box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.3);
    }
`;

export const ListInput: React.FC<ListInputProps> = ({ appendToList }) => {
    const [inputText, setInputText] = React.useState<string>('');

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if(!!inputText && e.key === 'Enter') {
            appendToList(inputText);
            setInputText('');
        }
    }

    return (
        <InputContainer>
            <input 
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Add todo list item"
                onKeyDown={handleKeyDown} 
            />
            <IconContainer disabled={!inputText}>
                <div className="icon">&#x23CE;</div>
            </IconContainer>
        </InputContainer>
    );
};