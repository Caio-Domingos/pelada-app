import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Icon, IconButton, Text, useTheme } from 'react-native-paper';
import { MyTheme } from '../../constants/theme/Theme.contant';
import { Pelada } from '../../models/peladas/pelada.model';
import * as dateFns from 'date-fns';

// TODO: import Clipboard from expo
import * as Clipboard from 'expo-clipboard';

export default function PeladaCard({
	pelada,
	handleCardOnPress,
	...props
}: {
	pelada: Pelada;
	handleCardOnPress: (pelada: Pelada) => void;
}) {
	const theme: MyTheme = useTheme();

	const handleOnPress = () => {
		console.log('Pressed');
	};

	return (
		<TouchableOpacity
			style={styles.cardTouchable}
			onPress={() => handleCardOnPress(pelada)}
		>
			<View
				style={{
					...styles.cardContainer,
					backgroundColor: theme.colors.card,
					borderRadius: theme.roundness,
				}}
			>
				<View style={{ ...styles.cardInfo }}>
					<Icon source='soccer' color={theme.colors.primary} size={22} />
					<Text style={styles.cardInfoText}>{pelada.name}</Text>
				</View>
				<View style={{ ...styles.cardInfo }}>
					<Icon source='map-marker' color={theme.colors.primary} size={22} />
					<Text style={styles.cardInfoText}>{pelada.address}</Text>
					<View style={styles.cardInfoSecondIcon}>
						<IconButton
							icon='content-copy'
							size={22}
							onPress={async () => {
								await Clipboard.setStringAsync(pelada.address);
								console.log('Copied to clipboard');
							}}
						/>
					</View>
				</View>
				<View style={{ ...styles.cardInfo }}>
					<Icon source='calendar' color={theme.colors.primary} size={22} />
					<Text style={styles.cardInfoText}>{dateFns.format(new Date(pelada.date as string), 'dd/MM/yyyy HH:mm')}</Text>
				</View>
				<View style={{ ...styles.cardInfo }}>
					<Icon source='account-group' color={theme.colors.primary} size={22} />
					<Text style={styles.cardInfoText}>
						{pelada.players.length}/{pelada.playerLimit}
					</Text>
				</View>
				<View style={styles.cardFooterContent}>
					<Button
						style={styles.cardFooterButton}
						mode='contained'
						buttonColor={theme.colors.primaryContainer}
						onPress={() => console.log('Pressed')}
					>
						Entrar na pelada
					</Button>
					<Button
						style={styles.cardFooterButton}
						icon='navigation'
						mode='outlined'
						onPress={() => console.log('Pressed')}
					>
						Ir (GPS)
					</Button>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	cardTouchable: {
		width: '100%',
		padding: 10,
		marginBottom: 10,
	},
	cardContainer: {
		width: '100%',
		padding: 10,
		marginBottom: 10,
	},
	cardInfo: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		paddingVertical: 10,
	},
	cardInfoIcon: {},
	cardInfoText: {
		marginStart: 10,
		flex: 1,
	},
	cardInfoSecondIcon: {
		width: 40,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardFooterContent: {},
	cardFooterButton: {
		marginBottom: 10,
	},
});
