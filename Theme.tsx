import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import {
	useFonts,
	Inter_100Thin,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
} from '@expo-google-fonts/inter';

import { useSelector } from 'react-redux';

export default function ThemeController({ ...props }) {
	const { theme } = useSelector((state: any) => state.theme);

	useEffect(() => {
		console.log('ThemeController: theme', theme);
	}, [theme]);

	let [fontsLoaded] = useFonts({
		Inter_100Thin,
		Inter_300Light,
		Inter_400Regular,
		Inter_500Medium,
	});

	return <PaperProvider theme={theme}>{props.children}</PaperProvider>;
}
