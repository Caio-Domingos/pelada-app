import { Image, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { RegisterStyle } from './Register.style';
import { useFormik } from 'formik';
import React from 'react';
import CustomTextInput from '../../../components/CustomTextInput';

export default function RegisterScreen({ navigation, ...props }: any) {
	const theme = useTheme();

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
		onSubmit: (values) => {
			console.log('Formik values:', values);
			console.log('Formik isSubmitting:', formik);
			console.log('Formik isSubmitting:', formik.isSubmitting);
			console.log('Formik isValid:', formik.isValid);
		},
	});

	const inputRefs = {
		name: React.useRef(null),
		email: React.useRef(null),
		password: React.useRef(null),
		confirmPassword: React.useRef(null),
	};

	return (
		<View style={RegisterStyle.container}>
			<View style={RegisterStyle.header}>
				<Image source={require('../../../../assets/logo.svg')} />
				<View style={RegisterStyle.headerTextContainer}>
					<Text
						variant='headlineLarge'
						style={{
							...RegisterStyle.headerTextTitle,
							color: theme.colors.primary,
						}}
					>
						Criticos
					</Text>
					<Text
						variant='titleMedium'
						style={{
							...RegisterStyle.headerTextSubtitle,
							color: theme.colors.onBackground,
						}}
					>
						Peladínea
					</Text>
				</View>
			</View>
			<View style={RegisterStyle.body}>
				<CustomTextInput
					label={'Email'}
					value={formik.values.email}
					onBlur={formik.handleBlur}
					onChangeText={formik.handleChange('email')}
					otherProps={{
						style: { ...RegisterStyle.bodyInput },
					}}
				/>
				<CustomTextInput
					label={'Nome'}
					onChangeText={formik.handleChange('name')}
					value={formik.values.name}
					onBlur={formik.handleBlur}
					otherProps={{
						style: { ...RegisterStyle.bodyInput },
					}}
				/>
				<CustomTextInput
					label={'Senha'}
					onChangeText={formik.handleChange('password')}
					value={formik.values.password}
					onBlur={formik.handleBlur}
					otherProps={{
						style: { ...RegisterStyle.bodyInput },
					}}
				/>
				<CustomTextInput
					label={'Confirmar senha'}
					onChangeText={formik.handleChange('confirmPassword')}
					value={formik.values.confirmPassword}
					onBlur={formik.handleBlur}
					otherProps={{
						style: { ...RegisterStyle.bodyInput },
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
	);
}
