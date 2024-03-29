import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';
import { HomeStyles } from './Home.style';
import HeaderAuth from '../../../components/headers/HeaderAuth';
import { useEffect, useState } from 'react';
import PeladaCard from '../../../components/screen-components/PeladaCard';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { FAB } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PeladaService } from '../../../services/pelada.service';
import { Pelada } from '../../../models/peladas/pelada.model';

const mockupPeladas = [
	{
		title: '9ª Peladinea Críticos',
		location: 'Arena Vegas - R. Guararapes, 600 - Monte Castelo, Contagem',
		date: new Date().toISOString(),
		players: 20,
		limitPlayers: 20,
	},
	{
		title: '10ª Peladinea Críticos',
		location: 'Arena Vegas - R. Guararapes, 600 - Monte Castelo, Contagem',
		date: new Date().toISOString(),
		players: 10,
		limitPlayers: 20,
	},
];

export default function HomeScreen({ navigation, ...props }: any) {
	const [peladas, setPeladas] = useState<Pelada[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const user = useSelector((state: RootState) => state.auth.user);
	const [role, setRole] = useState('');

	useEffect(() => {
		if (user) {
			setRole(user.role);
		}
		console.log('role => ', role);
	}, [user]);

	useEffect(() => {
		const fetchData = async () => {
			console.log('init party!');
			const peladaService = new PeladaService();

			let fetchPeladas: Pelada[] = [];
			try {
				fetchPeladas = await peladaService.getPeladasInPreparation();
				console.log('fetchPeladas', fetchPeladas);
				setPeladas(fetchPeladas || []);
			} catch (error) {
				console.log('error fetch', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const handleCardEdit = (pelada: Pelada) => {
		console.log('Card Pressed - Edit - Home Screen!', pelada);
		navigation.navigate('HomeDetails', { pelada_id: pelada.id });
	};
	const handleCardDelete = (pelada: Pelada) => {
		console.log('Card Pressed - Delete - Home Screen!', pelada);
		// TODO: Implement Delete Pelada Modal confirmation
	};

	return (
		<View style={HomeStyles.container}>
			<HeaderAuth navigation={props.navigation} />
			<View style={{ ...HomeStyles.body }}>
				<KeyboardAwareScrollView
					style={{ flex: 1 }}
					contentContainerStyle={{ flexGrow: 1 }}
					enableOnAndroid={true}
					extraScrollHeight={12}
					enableAutomaticScroll={Platform.OS === 'ios'}
				>
					<View style={HomeStyles.cardsContainer}>
						{peladas.map((pelada, index) => {
							return (
								<PeladaCard
									key={index}
									pelada={pelada}
									handleCardEdit={handleCardEdit}
									handleCardDelete={handleCardDelete}
								/>
							);
						})}
					</View>
				</KeyboardAwareScrollView>
				<View style={HomeStyles.addMoreContainer}>
					<FAB
						icon='plus'
						mode='flat'
						onPress={() =>
							navigation.navigate('HomeDetails', { pelada_id: null })
						}
					/>
				</View>
			</View>
		</View>
	);
}
