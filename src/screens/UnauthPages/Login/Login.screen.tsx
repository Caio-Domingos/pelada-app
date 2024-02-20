import { Image, View } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import { LoginStyle } from './Login.style';
import { useFormik } from 'formik';
import React from 'react';
import CustomTextInput from '../../../components/form-components/CustomTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/slicers/auth.slicer';
import { AppDispatch } from '../../../store/store';
import HeaderUnauth from '../../../components/headers/HeaderUnauth';

export default function LoginScreen({ navigation, ...props }: any) {
	const theme = useTheme();
	const { user, isError, isSuccess, isLoading, message } = useSelector(
		(state: any) => state.auth
	);
	const dispatch: AppDispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate: (values) => {
			const errors: any = {};

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

			return errors;
		},
		onSubmit: async (values) => {
			console.log('Formik values:', values);
			console.log('Formik isSubmitting:', formik);
			console.log('Formik isSubmitting:', formik.isSubmitting);
			console.log('Formik isValid:', formik.isValid);

			console.log('Login');

			try {
				const ret = await dispatch(
					login({ email: values.email, password: values.password })
				);
				console.log('Ret:', ret);
			} catch (error) {
				console.log('Error:', error);
			} finally {
				console.log('Finally');
				formik.setSubmitting(false);
			}
		},
	});

	return (
		<View style={LoginStyle.container}>
			<HeaderUnauth />
			<View style={LoginStyle.body}>
				<CustomTextInput
					label={'Email'}
					value={formik.values.email}
					onBlur={formik.handleBlur('email')}
					onChangeText={formik.handleChange('email')}
					otherProps={{
						style: { ...LoginStyle.bodyInput },
					}}
				/>
				<CustomTextInput
					label={'Senha'}
					onChangeText={formik.handleChange('password')}
					value={formik.values.password}
					onBlur={formik.handleBlur('password')}
					otherProps={{
						style: { ...LoginStyle.bodyInput },
						secureTextEntry: true,
					}}
				/>
			</View>
			<View style={LoginStyle.footer}>
				<Button
					style={LoginStyle.footerButtonLogin}
					mode='contained'
					onPress={() => formik.handleSubmit()}
					disabled={!formik.dirty || formik.isSubmitting || !formik.isValid}
				>
					{formik.isSubmitting ? 'Entrando...' : 'Entrar'}
				</Button>
				<Button
					mode='text'
					textColor={theme.colors.onBackground}
					onPress={() => navigation.navigate('Register')}
				>
					Não tem uma conta? Cadastre-se
				</Button>
			</View>
		</View>
	);
}
