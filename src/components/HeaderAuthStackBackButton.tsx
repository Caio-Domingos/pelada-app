import { View } from 'react-native';
import { IconButton, Text, useTheme } from 'react-native-paper';

export default function HeaderAuthStackBackButton({
	navigation,
	route,
	options,
	back,
}: {
	navigation: any;
	route: any;
	options: any;
	back: any;
}) {
	const theme = useTheme();

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: theme.colors.primary,
			}}
		>
			{back && (
				<IconButton
					icon='arrow-left'
					onPress={() => {
						navigation.goBack();
					}}
				/>
			)}
			<Text style={{ color: theme.colors.onPrimary }}>
				{options.title || 'Salve véi'}
			</Text>
		</View>
	);
}
