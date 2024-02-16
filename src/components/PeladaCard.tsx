import { StyleSheet, View } from 'react-native';
import { Button, Icon, IconButton, Text, useTheme } from 'react-native-paper';
import { MyTheme } from '../constants/theme/Theme.contant';

export default function PeladaCard({ ...props }) {
	const theme: MyTheme = useTheme();

	return (
		<View
			style={{
				...styles.cardContainer,
				backgroundColor: theme.colors.card,
				borderRadius: theme.roundness,
			}}
		>
			<View style={{ ...styles.cardInfo }}>
				<Icon source='soccer' color={theme.colors.primary} size={22} />
				<Text style={styles.cardInfoText}>{props.pelada.title}</Text>
			</View>
			<View style={{ ...styles.cardInfo }}>
				<Icon source='map-marker' color={theme.colors.primary} size={22} />
				<Text style={styles.cardInfoText}>{props.pelada.location}</Text>
				<View style={styles.cardInfoSecondIcon}>
					<IconButton
						icon='content-copy'
						size={22}
						onPress={() => console.log('Pressed')}
					/>
				</View>
			</View>
			<View style={{ ...styles.cardInfo }}>
				<Icon source='calendar' color={theme.colors.primary} size={22} />
				<Text style={styles.cardInfoText}>{props.pelada.date}</Text>
			</View>
			<View style={{ ...styles.cardInfo }}>
				<Icon source='account-group' color={theme.colors.primary} size={22} />
				<Text style={styles.cardInfoText}>
					{props.pelada.players}/{props.pelada.limitPlayers}
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
	);
}

const styles = StyleSheet.create({
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
