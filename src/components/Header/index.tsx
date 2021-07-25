import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from 'react-dark-mode-toggle';
import logo from '../../assets/logo.png'
import { useAppDispatch } from '../../_state/hooks';
import { invert } from '../../_state/reducers/theme.reducer';

const LS_THEME_PREF_KEY = 'user-theme-pref';

const StyledHeader = styled.div<{ darkMode: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 1rem 2rem;
    background-color: ${props => props.theme.colors.bg};
    border-bottom: 1px solid ${props => props.theme.colors.offsetBg};
    
    transition: background-color 0.3s ease, border-color 0.3s ease;

    .flex-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const StyledImg = styled.img`
    height: 2rem;
    margin-right: 2rem;
    object-fit: contain;
`;

const StyledToggleContainer = styled.div<{ darkMode: boolean }>`
    border: 1px solid ${props => props.darkMode ? props.theme.colors.offsetBg : 'white'};
    border-radius: 2rem;
    padding: 0 1px 2px 0;
    transition: border-color 0.3s ease;
`;

const StyledATag = styled.a.attrs({ target: "_blank" })`
    font-size: 2rem;
    color: ${props => props.theme.colors.fg};
    opacity: 1;
    margin-left: 1rem;

    &:hover {
        color: ${props => props.theme.colors.fg};
        opacity: 0.7;
    }
`;

export const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
    const dispatch = useAppDispatch();

    /** Get persisted dark mode preference if exists */
    React.useEffect(() => {
        const preference = localStorage.getItem(LS_THEME_PREF_KEY);
        if(preference) {
            const isDarkMode = JSON.parse(preference).darkMode;
            setIsDarkMode(isDarkMode);
            if(isDarkMode) {
                dispatch(invert());
            }
        }
    }, [dispatch]);

    /** When dark mode is toggled, save preference to local storage */
    React.useEffect(() => {
        localStorage.setItem(LS_THEME_PREF_KEY, JSON.stringify({ darkMode: isDarkMode }));
    }, [isDarkMode]);

    /** Toggle dark mode and invert theme */
    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
        dispatch(invert());
    }

    return (
        <StyledHeader darkMode={isDarkMode}>
            <a title="personal website" aria-label="personal website" target="_blank" href="https://jsainz.me">
                <StyledImg src={logo} alt="logo" />
            </a>
            <div className="flex-container">
                <StyledToggleContainer darkMode={isDarkMode}>
                    <DarkModeToggle
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={64}
                    />
                </StyledToggleContainer>
                <StyledATag title="view source code" aria-label="repository link" href="https://github.com/jsainz237/todo-list">
                    <i className="fab fa-github"></i>
                </StyledATag>
            </div>
        </StyledHeader>
    );
};