import { createSlice } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';
import type { RootState } from '../store';

const theme: DefaultTheme = {
    colors: {
        bg: '#fafafa',
        fg: '#171717',
        offsetBg: '#eaeaea',
        offsetFg: '#303030',

        darkGray: '#686868',
        lightGray: '#dcdcdc',
    },

    breakpoints: {
        xs: '0',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },

    shadow: '0 1px 10px 1px',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: theme,
    reducers: {
        invert: (state) => {
            [state.colors.bg, state.colors.fg] = [state.colors.fg, state.colors.bg];
            [state.colors.offsetBg, state.colors.offsetFg] = [state.colors.offsetFg, state.colors.offsetBg];
            [state.colors.darkGray, state.colors.lightGray] = [state.colors.lightGray, state.colors.darkGray];
        }
    }
});

export const { invert } = themeSlice.actions;

export const themeSelector = (state: RootState) => state.theme;
export default themeSlice.reducer;