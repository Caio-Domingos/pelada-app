import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';
import * as dateFns from 'date-fns';
import * as Localization from 'expo-localization';
import { TimePickerModal } from 'react-native-paper-dates';
export interface TimePickerInputProps {
	label: string;
	value: string;
	handleChange: (value: string) => void;
}

export default function CustomTimePickerInput(props: TimePickerInputProps) {
	const theme = useTheme();
	const [visible, setVisible] = useState(false);
	const [locale, setLocale] = useState('');

	useEffect(() => {
		setLocale(Localization.getLocales()[0].languageTag);
	}, []);

	const onDismiss = () => {
		setVisible(false);
	};
	const onConfirm = React.useCallback(
		({ hours, minutes }: { hours: number; minutes: number }) => {
			setVisible(false);
			console.log({ hours, minutes });
			props.handleChange(`${hours}:${minutes}`);
		},
		[setVisible]
	);

	return (
		<TouchableRipple
			onPress={() => setVisible(true)}
			rippleColor={theme.colors.backdrop}
			style={{ marginBottom: 30 }}
		>
			<View
				style={{
					...styles.container,
					borderRadius: theme.roundness,
					borderColor: theme.colors.outline,
				}}
			>
				<Text
					variant='bodyLarge'
					style={{ color: theme.colors.onSurfaceVariant }}
				>
					{props.label}
				</Text>
				<Text style={{ color: theme.colors.onSurfaceVariant }}>
					{props.value}
				</Text>
				<TimePickerModal
					visible={visible}
					onDismiss={onDismiss}
					onConfirm={onConfirm}
					hours={12}
					minutes={14}
					locale={locale}
				/>
			</View>
		</TouchableRipple>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingVertical: 14,
		paddingHorizontal: 14,
		position: 'relative',
		borderWidth: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
