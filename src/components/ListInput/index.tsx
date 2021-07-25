import React from 'react';
import styled from 'styled-components';

interface ListInputProps {
    appendToList: (text: string) => any;
}

const InputContainer = styled.label`
    width: 100%;
    position: relative;
`;

const StyledInput = styled.input.attrs({
    type: "text",
    placeholder: "Add todo list item"
})`
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.fg};
    background-color: ${props => props.theme.colors.offsetBg};
    border: none;
    outline: none;
    transition: box-shadow 0.3s ease; 

    &:focus {
        box-shadow: 0 0 4px 4px ${props => props.theme.colors.lightGray};
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
`;

const StyledIconButton = styled.button`
    padding: 0 0.5rem;
    padding-top: 2px;
    user-select: none;
    background-color: ${props => props.theme.colors.offsetBg};
    color: ${props => props.disabled ? props.theme.colors.darkGray : props.theme.colors.fg};
    border-radius: 5px;
    border: 1px solid #cacaca;
    box-shadow: 0 2px 3px 0px ${props => props.theme.colors.darkGray};

    &:active {
        box-shadow: unset;
    }
`;

export const ListInput: React.FC<ListInputProps> = ({ appendToList }) => {
    const [inputText, setInputText] = React.useState<string>('');

    const addToList = () => {
        appendToList(inputText);
        setInputText('');
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if(!!inputText && e.key === 'Enter') {
            addToList();
        }
    }

    return (
        <InputContainer>
            <StyledInput 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={handleKeyDown} 
            />
            <IconContainer disabled={!inputText}>
                <StyledIconButton
                    disabled={!inputText}
                    onClick={addToList}
                >
                    {/* Return Key symbol */}
                    &#x23CE; 
                </StyledIconButton>
            </IconContainer>
        </InputContainer>
    );
};