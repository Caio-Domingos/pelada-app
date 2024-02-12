import { Image, Platform, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { RegisterStyle } from './Register.style';
import { useFormik } from 'formik';
import React from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import HeaderUnauth from '../../../components/HeaderUnauth';
import { useDispatch } from 'react-redux';
import { register } from '../../../store/slicers/auth.slicer';
import { AppDispatch } from '../../../store/store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function RegisterScreen({ navigation, ...props }: any) {
	const theme = useTheme();
	const dispatch: AppDispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validate: (values) => {
			const errors: any = {};
			if (!values.name) {
				errors.name = 'Campo obrigatório';
			} else if (values.name.length < 3) {
				errors.name = 'Nome muito curto';
			}
			if (!values.email) {
				errors.email = 'Campo obrigatório';
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
			) {
				errors.email = 'Email inválido';
			}
			if (!values.password) {
				errors.password = 'Campo obrigatório';
			} else if (values.password.length < 6) {
				errors;
			}
			if (!values.confirmPassword) {
				errors.confirmPassword = 'Campo obrigatório';
			} else if (values.confirmPassword !== values.password) {
				errors.confirmPassword = 'Senhas não conferem';
			}
			return errors;
		},
		onSubmit: async (values) => {
			console.log('Formik values:', values);

			console.log('Dispatching register');
			try {
				await dispatch(
					register({
						email: values.email,
						password: values.password,
						name: values.name,
					})
				);

				console.log('Dispatched register');
			} catch (error) {
				console.log('Error dispatching register:', error);
			} finally {
				formik.setSubmitting(false);
			}
		},
	});

	const inputRefs = {
		name: React.useRef(null),
		email: React.useRef(null),
		password: React.useRef(null),
		confirmPassword: React.useRef(null),
	};

	return (
		<KeyboardAwareScrollView
			style={{ flex: 1 }}
			contentContainerStyle={{ flexGrow: 1 }}
			enableOnAndroid={true}
			extraScrollHeight={12}
			enableAutomaticScroll={Platform.OS === 'ios'}
		>
			<View style={RegisterStyle.container}>
				<HeaderUnauth />

				<View style={RegisterStyle.body}>
					<CustomTextInput
						label={'Email'}
						value={formik.values.email}
						onBlur={formik.handleBlur('email')}
						onChangeText={formik.handleChange('email')}
						otherProps={{
							style: { ...RegisterStyle.bodyInput },
						}}
					/>
					<CustomTextInput
						label={'Nome'}
						onChangeText={formik.handleChange('name')}
						value={formik.values.name}
						onBlur={formik.handleBlur('name')}
						otherProps={{
							style: { ...RegisterStyle.bodyInput },
						}}
					/>
					<CustomTextInput
						label={'Senha'}
						onChangeText={formik.handleChange('password')}
						value={formik.values.password}
						onBlur={formik.handleBlur('password')}
						otherProps={{
							style: { ...RegisterStyle.bodyInput },
							secureTextEntry: true,
						}}
					/>
					<CustomTextInput
						label={'Confirmar senha'}
						onChangeText={formik.handleChange('confirmPassword')}
						value={formik.values.confirmPassword}
						onBlur={formik.handleBlur('confirmPassword')}
						otherProps={{
							style: { ...RegisterStyle.bodyInput },
							secureTextEntry: true,
						}}
					/>
				</View>
				<View style={RegisterStyle.footer}>
					<Button
						style={RegisterStyle.footerButtonRegister}
						mode='contained'
						onPress={() => formik.handleSubmit()}
						disabled={!formik.dirty || formik.isSubmitting || !formik.isValid}
					>
						{formik.isSubmitting ? 'Registrando...' : 'Registrar'}
					</Button>
					<Button
						mode='text'
						textColor={theme.colors.onBackground}
						onPress={() => navigation.navigate('Login')}
					>
						Já tem conta? Faça login
					</Button>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
}
