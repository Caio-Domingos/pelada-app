import { createSlice } from '@reduxjs/toolkit';
interface ThemeState {
	mode: 'dark' | 'light';
}

const initialState: ThemeState = {
	mode: 'dark',
};

// Thunk para mudar as cores do tema
export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		reset: (state: ThemeState) => {
			state.mode = 'dark';
		},
		toggleTheme: (state: ThemeState) => {
			state.mode = state.mode === 'dark' ? 'light' : 'dark';
		},
		setTheme: (state: ThemeState, action) => {
			state.mode = action.payload;
		},
	},
});

export const { reset, toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
