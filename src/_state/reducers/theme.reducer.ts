import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const theme = {
    bg: '#fafafa',
    fg: '#141414',

    offsetBg: '#eaeaea',
    offsetFg: '#303030',

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
            [state.bg, state.fg] = [state.fg, state.bg];
        }
    }
});

export const { invert } = themeSlice.actions;

export const themeSelector = (state: RootState) => state.theme;
export default themeSlice.reducer;