import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
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

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function ThemeController({ ...props }) {
	const { theme } = useSelector((state: any) => state.theme);
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await Font.loadAsync({
					Inter_100Thin,
					Inter_300Light,
					Inter_400Regular,
					Inter_500Medium,
				});
				// Artificially delay for two seconds to simulate a slow loading
				// experience. Please remove this if you copy and paste the code!
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<StatusBar style={theme.dark ? 'dark' : 'light'} />
			<PaperProvider theme={theme}>{props.children}</PaperProvider>
		</View>
	);
}
