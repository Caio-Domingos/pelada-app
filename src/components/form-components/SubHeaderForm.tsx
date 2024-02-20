import { View } from 'react-native';
import { useTheme, Divider, Text, Icon } from 'react-native-paper';

export default function SubHeaderFormComponent({
	title,
	icon,
	...props
}: {
	title: string;
	icon?: string;
}) {
	const theme = useTheme();

	return (
		<View
			style={{
				width: '100%',
			}}
		>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-start',
					marginBottom: 20,
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 50,
						marginEnd: 16,
						width: 40,
						height: 40,
						backgroundColor: theme.colors.primaryContainer,
					}}
				>
					{/* <Text
						style={{
							color: theme.colors.onPrimaryContainer,
						}}
					>
						{position}
					</Text> */}
					<Icon
						source={icon || 'check'}
						color={theme.colors.onPrimaryContainer}
						size={27}
					/>
				</View>
				<Text variant='titleMedium'>{title || 'Sem texto'}</Text>
			</View>
			{/* <Divider
				style={{
					marginVertical: 16,
				}}
			></Divider> */}
		</View>
	);
}
