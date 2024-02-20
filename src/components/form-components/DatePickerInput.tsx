import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';
import * as dateFns from 'date-fns';
import * as Localization from 'expo-localization';
import { DatePickerModal } from 'react-native-paper-dates';
export interface DatePickerInputProps {
	label: string;
	value: string;
	handleChange: (value: string) => void;
}

export default function CustomDatePickerInput(props: DatePickerInputProps) {
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
		(date: any) => {
			console.log('date on confirm', date.date);
			props.handleChange(date.date.toISOString());
			setVisible(false);
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
					{dateFns.format(new Date(props.value), 'dd/MM/yyyy')}
				</Text>
				<DatePickerModal
					visible={visible}
					onDismiss={onDismiss}
					onConfirm={onConfirm}
					locale={'pt'}
					date={new Date(props.value)}
					mode='single'
					presentationStyle={'overFullScreen'}
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
