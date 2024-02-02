import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface ThemeState {
	theme: any;
	colors: {
		screenBG: string;
		textColor: string;
		primary: string;
		card: string;
	};
}

export const darkTheme = {
	screenBG: 'transparent',
	textColor: '#FB3338',
	primary: '#FB3338',
	card: '#272C29',
};
export const lightTheme = {
	screenBG: 'transparent',
	textColor: '#FB3338',
	primary: '#FB3338',
	card: '#272C29',
};

const initialState: ThemeState = {
	theme: 'dark',
	colors: { ...darkTheme },
};

// Thunk para mudar as cores do tema
export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		reset: (state: ThemeState) => {
			state.theme = 'dark';
			state.colors = { ...darkTheme };
		},
		toggleTheme: (state: ThemeState) => {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
			state.colors = state.theme === 'dark' ? darkTheme : lightTheme;
			// Colors.setScheme(state.theme);
		},
	},
});

export const { reset, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
