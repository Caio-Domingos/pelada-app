import React, { forwardRef, useEffect, useState } from 'react';
import { PeladaTimeBlocks } from '../../models/peladas/pelada.model';
import {
	Keyboard,
	Platform,
	ScrollView,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import {
	Button,
	Divider,
	List,
	MD3Colors,
	Menu,
	Modal,
	Portal,
	Text,
	TextInput,
	TouchableRipple,
	useTheme,
} from 'react-native-paper';
import { CustomTextInputProps } from './CustomTextInput';

interface CustomSelectProps extends CustomTextInputProps {
	options: {
		label: string;
		value: any;
	}[];
}

export function CustomSelectx(props: CustomSelectProps, ref: any) {
	const theme = useTheme();
	const [innerValue, setInnerValue] = useState<PeladaTimeBlocks>(
		PeladaTimeBlocks.ONE_HOUR
	);
	const [visibleMenu, setVisibleMenu] = useState(false);

	useEffect(() => {
		// Se o valor de value estiver contido em PeladaTimeBlocks, usar o setinnerValue com o valor interno
		if (
			Object.values(PeladaTimeBlocks).includes(props.value as PeladaTimeBlocks)
		) {
			console.log('innerValue if', props.value);
			setInnerValue(props.value as PeladaTimeBlocks);
		} else {
			// Se não, usar o valor padrão
			console.log('innerValue else', props.value);
			setInnerValue(PeladaTimeBlocks.ONE_HOUR);
		}
	}, [props.value]);

	const onChange = (value: string) => {
		props.onChangeText(value);
		closeMenu('confirm');
	};

	const closeMenu = (reason: string) => {
		console.log('closeMenu');
		setVisibleMenu(false);
	};
	const openMenu = () => {
		console.log('openMenu');
		Keyboard.dismiss();
		setVisibleMenu(true);
	};

	return (
		<TouchableRipple
			style={styles.container}
			onPress={openMenu}
			rippleColor={'transparent'}
		>
			<>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<TextInput
						ref={ref}
						label={props.label}
						value={`${innerValue}`}
						onChangeText={onChange}
						onBlur={props.onBlur}
						onEndEditing={() => closeMenu('cancel')}
						editable={false}
						mode={'outlined'}
						{...props.otherProps}
					/>
				</TouchableWithoutFeedback>
				<Portal>
					<Modal
						visible={visibleMenu}
						onDismiss={() => closeMenu('cancel')}
						contentContainerStyle={{
							backgroundColor: theme.colors.surface,
							padding: 20,
							width: '80%',
							maxHeight: 400,
							// marginHorizontal: 'auto',
							// justifyContent: 'center', // Alinha o conteúdo verticalmente ao centro
							// alignItems: 'center', // Alinha o conteúdo horizontalmente ao centro
							alignSelf: 'center',
						}}
					>
						<ScrollView>
							<Text variant='headlineSmall'>Escolha uma opção</Text>
							<List.Section>
								{props.options.map((option, index) => (
									<>
										<List.Item
											key={index}
											title={option.label}
											left={() => <List.Icon icon='chevron-right' />}
											rippleColor={theme.colors.backdrop}
											onPress={() => onChange(option.value)}
										/>
										<Divider />
									</>
								))}
							</List.Section>
						</ScrollView>
					</Modal>
				</Portal>
			</>
		</TouchableRipple>
	);
}

const CustomSelect = React.forwardRef((props: CustomSelectProps, ref: any) => {
	const theme = useTheme();
	const [innerValue, setInnerValue] = useState<PeladaTimeBlocks>(
		PeladaTimeBlocks.ONE_HOUR
	);
	const [visibleMenu, setVisibleMenu] = useState(false);

	useEffect(() => {
		// Se o valor de value estiver contido em PeladaTimeBlocks, usar o setinnerValue com o valor interno
		if (
			Object.values(PeladaTimeBlocks).includes(props.value as PeladaTimeBlocks)
		) {
			console.log('innerValue if', props.value);
			setInnerValue(props.value as PeladaTimeBlocks);
		} else {
			// Se não, usar o valor padrão
			console.log('innerValue else', props.value);
			setInnerValue(PeladaTimeBlocks.ONE_HOUR);
		}
	}, [props.value]);

	const onChange = (value: string) => {
		props.onChangeText(value);
		closeMenu('confirm');
	};

	const closeMenu = (reason: string) => {
		console.log('closeMenu');
		setVisibleMenu(false);
	};
	const openMenu = () => {
		console.log('openMenu');
		Keyboard.dismiss();
		setVisibleMenu(true);
	};

	return (
		<TouchableRipple
			style={styles.container}
			onPress={openMenu}
			rippleColor={'transparent'}
		>
			<>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<TextInput
						ref={ref}
						label={props.label}
						value={`${innerValue}`}
						onChangeText={onChange}
						onBlur={props.onBlur}
						onEndEditing={() => closeMenu('cancel')}
						editable={false}
						mode={'outlined'}
						{...props.otherProps}
					/>
				</TouchableWithoutFeedback>
				<Portal>
					<Modal
						visible={visibleMenu}
						onDismiss={() => closeMenu('cancel')}
						contentContainerStyle={{
							backgroundColor: theme.colors.surface,
							padding: 20,
							width: '80%',
							maxHeight: 400,
							// marginHorizontal: 'auto',
							// justifyContent: 'center', // Alinha o conteúdo verticalmente ao centro
							// alignItems: 'center', // Alinha o conteúdo horizontalmente ao centro
							alignSelf: 'center',
						}}
					>
						<ScrollView>
							<Text variant='headlineSmall'>Escolha uma opção</Text>
							<List.Section>
								{props.options.map((option, index) => (
									<>
										<List.Item
											key={index}
											title={option.label}
											left={() => <List.Icon icon='chevron-right' />}
											rippleColor={theme.colors.backdrop}
											onPress={() => onChange(option.value)}
										/>
										<Divider />
									</>
								))}
							</List.Section>
						</ScrollView>
					</Modal>
				</Portal>
			</>
		</TouchableRipple>
	);
});
export default CustomSelect;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		width: '100%',
		marginBottom: 30,
	},
});
