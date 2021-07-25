import React from 'react';
import styled from 'styled-components';

interface CheckmarkProps {
    checked: boolean;
    onChange: () => any;
}

const CheckboxContainer = styled.div`
    cursor: pointer;
    user-select: none;
`;

const CheckmarkSymbol = styled.div`
    padding-top: 3px;
    color: white;
`;

const StyledCheckbox = styled.div<Pick<CheckmarkProps, 'checked'>>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.75rem;
    height: 1.75rem;
    border-width: 2px;
    border-color: #6d6d6d;
    border-style: ${props => props.checked ? 'none' : 'solid'};
    border-radius: 2rem;
    background-color: ${props => props.checked ? '#489c5a' : 'transparent'};
    transition: box-shadow 0.3s ease, background-color 0.3s ease;

    ${CheckmarkSymbol} {
        visibility: ${props => props.checked ? 'visible' : 'hidden'};
    }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
    
    &:focus ~ ${StyledCheckbox} {
        box-shadow: 0 0 4px 4px ${props => props.theme.colors.lightGray}; 
    }
`;

export const Checkbox: React.FC<CheckmarkProps> = ({ checked, onChange }) => {
    return (
        <label>
            <CheckboxContainer>
                <HiddenCheckbox aria-label="checkbox" checked={checked} onChange={onChange} />
                <StyledCheckbox checked={checked}>
                    <CheckmarkSymbol>
                        <i className="fas fa-check"></i>
                    </CheckmarkSymbol>
                </StyledCheckbox>
            </CheckboxContainer>
        </label>
    );
}