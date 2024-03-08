import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
	Button,
	Divider,
	Icon,
	IconButton,
	MD3Colors,
	Menu,
	Text,
	TouchableRipple,
	useTheme,
} from 'react-native-paper';
import { MyTheme } from '../../constants/theme/Theme.contant';
import { Pelada } from '../../models/peladas/pelada.model';
import * as dateFns from 'date-fns';

// TODO: import Clipboard from expo
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import { set } from 'lodash';

export default function PeladaCard({
	pelada,
	handleCardEdit,
	handleCardDelete,
	...props
}: {
	pelada: Pelada;
	handleCardEdit: (pelada: Pelada) => void;
	handleCardDelete: (pelada: Pelada) => void;
}) {
	const theme: MyTheme = useTheme();

	const [visible, setVisible] = useState(false);

	const openMenu = () => setVisible(true);

	const closeMenu = () => setVisible(false);

	return (
		<TouchableRipple
			style={styles.cardTouchable}
			// onPress={() => handleCardOnPress(pelada)}
			// onPress={() => {}}
			// onPress={() => console.log('Pressed Card')}
		>
			<View
				style={{
					...styles.cardContainer,
					backgroundColor: theme.colors.card,
					borderRadius: theme.roundness,
				}}
			>
				<View
					// rippleColor='rgba(255, 0, 0)'
					style={styles.cardButtonAction}
				>
					<Menu
						visible={visible}
						onDismiss={closeMenu}
						anchor={
							// <Button onPress={openMenu}>
							// 	<Icon
							// 		source='dots-vertical'
							// 		color={MD3Colors.error50}
							// 		size={20}
							// 	/>
							// </Button>
							<IconButton icon='dots-vertical' size={22} onPress={openMenu} />
						}
					>
						<Menu.Item
							onPress={() => {
								handleCardEdit(pelada);
								setVisible(false);
							}}
							title='Editar'
						/>
						<Menu.Item
							onPress={() => {
								handleCardDelete(pelada);
								setVisible(false);
							}}
							title='Excluir'
						/>
						{/* <Divider /> */}
					</Menu>
					{/* <Text variant='bodyMedium'>-</Text> */}
				</View>
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
					<Text style={styles.cardInfoText}>
						{dateFns.format(
							new Date(pelada.date as string),
							'dd/MM/yyyy HH:mm'
						)}
					</Text>
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
		</TouchableRipple>
	);
}

const styles = StyleSheet.create({
	cardTouchable: {
		width: '100%',
		marginBottom: 10,
	},
	cardContainer: {
		width: '100%',
		padding: 10,
		// marginBottom: 10,
		position: 'relative',
	},
	cardButtonAction: {
		position: 'absolute',
		top: 10,
		right: 5,
		// paddingVertical: 10,
		// paddingHorizontal: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 10,
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
