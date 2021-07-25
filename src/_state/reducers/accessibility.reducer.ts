import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AccessibilityState {
    accommodations: boolean;
}

const initialState: AccessibilityState = {
    accommodations: true,
}

export const accessibilitySlice = createSlice({
    name: 'accessibility',
    initialState,
    reducers: {
        toggle: (state) => {
            state.accommodations = !state.accommodations;
        }
    }
});

export const { toggle } = accessibilitySlice.actions;

export const accessibilitySelector = (state: RootState) => state.accessibility;
export default accessibilitySlice.reducer;