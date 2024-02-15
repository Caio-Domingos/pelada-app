import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import {
	DefaultTheme,
	MD3Theme,
	PaperProvider,
	useTheme,
} from 'react-native-paper';
import {
	useFonts,
	Inter_100Thin,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
} from '@expo-google-fonts/inter';

import { useSelector } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import {
	MD3DarkTheme,
	MD3LightTheme,
} from './src/constants/theme/Theme.contant';

SplashScreen.preventAutoHideAsync();

export default function ThemeController({ ...props }) {
	const { mode } = useSelector((state: any) => state.theme);
	const [fontsLoaded, fontError] = useFonts({
		'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
		'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
		'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
		'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
		'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
		'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
		'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
		'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
		'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
	});

	const darkTheme = MD3DarkTheme;
	const lightTheme = MD3LightTheme;
	const [theme, setTheme] = useState<MD3Theme>(darkTheme);

	useEffect(() => {
		setTheme(mode === 'dark' ? darkTheme : lightTheme);
	}, [mode]);

	const onLayoutRootView = useCallback(async () => {
		console.log('onLayoutRootView', fontsLoaded, fontError);
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<StatusBar style={mode} />
			<PaperProvider theme={theme}>{props.children}</PaperProvider>
		</View>
	);
}
