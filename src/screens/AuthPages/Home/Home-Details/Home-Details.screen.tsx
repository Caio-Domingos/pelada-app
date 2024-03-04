import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Platform, View } from 'react-native';
import { useFormik } from 'formik';
import {
	ActivityIndicator,
	Button,
	Checkbox,
	Divider,
	MD2Colors,
	Text,
	useTheme,
} from 'react-native-paper';
import * as dateFns from 'date-fns';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HomeDetailsStyle } from './Home-Details.style';
import {
	Pelada,
	PeladaPlayer,
	PeladaStatus,
	PeladaTimeBlocks,
} from '../../../../models/peladas/pelada.model';
import { PeladaTimeBlocksOptions } from '../../../../models/peladas/pelada.dto';
import SubHeaderFormComponent from '../../../../components/form-components/SubHeaderForm';
import CustomTextInput from '../../../../components/form-components/CustomTextInput';
import CustomTimePickerInput from '../../../../components/form-components/TimePickerInput';
import CustomDatePickerInput from '../../../../components/form-components/DatePickerInput';
import CustomSelect from '../../../../components/form-components/CustomSelect';
import { PeladaService } from '../../../../services/pelada.service';
import { RouteProp, useRoute } from '@react-navigation/native';
import CustomCheckbox from '../../../../components/form-components/CustomCheckbox';

export default function HomeDetailsScreen({ ...props }) {
	const user = useSelector((state: any) => state.auth.user);
	const route = useRoute<RouteProp<any>>();
	const { pelada_id } = route.params as any;
	const [loading, setLoading] = useState(false);

	const initialValues: Pelada = {
		name: '',
		address: '',

		date: new Date().toISOString(),
		time: dateFns.format(new Date(), 'HH:mm'),

		priceDetails: {
			startPrice: 0,
			startTime: PeladaTimeBlocks.ONE_HOUR,
			pixCopyPaste: '',
			Increments: [],
		},

		playerLimit: 21,
		canVisitorsInvite: true,

		status: PeladaStatus.PREPARATION,
		organizer: {
			id: user.id,
			name: user.name,
		},

		players: [],
	};

	let pelada: Pelada | null = null;

	useEffect(() => {
		console.log('user', user);
		console.log('pelada_id', pelada_id);

		const checkPeladaid = async () => {
			try {
				if (pelada_id !== null) {
					setLoading(true);
					const peladaService = new PeladaService();
					pelada = await peladaService.getOne(pelada_id);
					console.log('pelada', pelada);
					handleSetValuesEditPelada();
				} else {
					console.log('No pelada_id, creating new pelada');
				}
			} catch (error) {
			} finally {
				setLoading(false);
			}
		};

		checkPeladaid();
		// TODO: block user if role is not organizer or admin
	}, []);

	const handleSetValuesEditPelada = () => {
		if (pelada) {
			formik.setValues({
				...pelada,
			});
		}
	};

	const formik = useFormik({
		initialValues: initialValues,
		validate: (values) => {
			const errors: any = {};

			if (!values.name) {
				errors.name = 'Nome é obrigatório';
			}

			if (!values.address) {
				errors.address = 'Endereço é obrigatório';
			}

			if (values.priceDetails.startPrice <= 0) {
				errors.priceDetails = {
					startPrice: 'Valor inicial é obrigatório',
				};
			}

			if (values.playerLimit <= 0) {
				errors.playerLimit = 'Limite de jogadores é obrigatório';
			}

			return errors;
		},
		onSubmit: async (values) => {
			console.log(values);

			const peladaService = new PeladaService();

			let res;

			try {
				if (pelada_id) {
					res = await peladaService.update(pelada_id, values);
					console.log('res update', res);
				} else {
					res = await peladaService.create(values);
					console.log('res create', res);
				}

				// Navigate to home
			} catch (error) {
				console.log('error create', error);
			} finally {
				console.log('res create', res);
				formik.setSubmitting(false);
			}
		},
	});

	useEffect(() => {
		console.log('formik.values', formik.values);
	}, [formik.values]);

	return (
		<View
			style={
				!loading
					? HomeDetailsStyle.container
					: HomeDetailsStyle.containerLoading
			}
		>
			<KeyboardAwareScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{ flexGrow: 1 }}
				enableOnAndroid={true}
				extraScrollHeight={12}
				enableAutomaticScroll={Platform.OS === 'ios'}
			>
				{loading ? (
					<View style={HomeDetailsStyle.loadingContent}>
						<ActivityIndicator animating={true} color={MD2Colors.red800} />
						<Text variant='bodyMedium'>Carregando dados da pelada...</Text>
					</View>
				) : (
					<View style={HomeDetailsStyle.formContainer}>
						<Text variant='titleLarge'>
							{pelada_id ? 'Editando' : 'Criando'} pelada
						</Text>
						<Divider style={HomeDetailsStyle.titleDivider}></Divider>
						<View>
							<SubHeaderFormComponent title='Dados básicos' icon='pen' />
							<CustomTextInput
								label={'Nome'}
								value={formik.values.name}
								onBlur={formik.handleBlur('name')}
								onChangeText={formik.handleChange('name')}
								otherProps={{
									style: { ...HomeDetailsStyle.bodyInput },
								}}
							/>
							<CustomTextInput
								label={'Endereço'}
								value={formik.values.address}
								onBlur={formik.handleBlur('address')}
								onChangeText={formik.handleChange('address')}
								otherProps={{
									style: { ...HomeDetailsStyle.bodyInput },
								}}
							/>
						</View>
						<View>
							<SubHeaderFormComponent
								title='Data e hora'
								icon='calendar-edit'
							/>
							<CustomDatePickerInput
								label='Data'
								value={formik.values.date as string}
								handleChange={formik.handleChange('date')}
							/>
							<CustomTimePickerInput
								label='Horário'
								value={formik.values.time as string}
								handleChange={formik.handleChange('time')}
							/>
						</View>
						<View>
							<SubHeaderFormComponent title='Valores' icon='cash' />
							<CustomTextInput
								label={'Valor'}
								value={formik.values.priceDetails.startPrice}
								onBlur={formik.handleBlur('priceDetails.startPrice')}
								onChangeText={formik.handleChange('priceDetails.startPrice')}
								otherProps={{
									style: { ...HomeDetailsStyle.bodyInput },
								}}
							/>
							<CustomSelect
								label={'Tempo Inicial (Minutos)'}
								value={formik.values.priceDetails.startTime}
								onBlur={formik.handleBlur('priceDetails.startTime')}
								onChangeText={(value) => {
									formik.setFieldValue('priceDetails.startTime', value);
								}}
								otherProps={{}}
								options={PeladaTimeBlocksOptions}
							/>
						</View>
						<View>
							<SubHeaderFormComponent title='Jogadores' icon='account-edit' />

							<CustomTextInput
								label={'Limite de jogadores'}
								value={formik.values.playerLimit}
								onBlur={formik.handleBlur('playerLimit')}
								onChangeText={formik.handleChange('playerLimit')}
								otherProps={{
									style: { ...HomeDetailsStyle.bodyInput },
								}}
							/>
							<Checkbox.Item
								label='Permitido visitantes?'
								status={
									formik.values.canVisitorsInvite ? 'checked' : 'unchecked'
								}
								onPress={(e) =>
									formik.setFieldValue(
										'canVisitorsInvite',
										!formik.values.canVisitorsInvite
									)
								}
							/>

							<CustomCheckbox
								label='Sou jogador também'
								value={formik.values.players.some(
									(p) => p.idPlayer === user.id
								)}
								onChange={(value) => {
									if (value) {
										const p: PeladaPlayer = {
											idPlayer: user.id,
											isVisitor: false,
											dateEntry: new Date().toISOString(),
											hasPaid: false,
											isPresent: false,
											paymentImgRef: '',
											playerName: user.name,
											visitorBy: '',
										};
										formik.setFieldValue('players', [
											...formik.values.players,
											p,
										]);
									} else {
										formik.setFieldValue(
											'players',
											formik.values.players.filter(
												(p) => p.idPlayer !== user.id
											)
										);
									}
								}}
							/>

							<Button
								mode='contained'
								style={HomeDetailsStyle.submitBtn}
								onPress={() => formik.handleSubmit()}
								disabled={
									!formik.dirty || formik.isSubmitting || !formik.isValid
								}
							>
								<Text>{formik.isSubmitting ? 'Salvando...' : 'Salvar'}</Text>
							</Button>
						</View>
					</View>
				)}
			</KeyboardAwareScrollView>
		</View>
	);
}
