import { RegisterStyle } from "../screens/UnauthPages/Register/Register.style";
import { Image, Text, View } from "react-native-ui-lib";

export default function HeaderUnauth({ navigation, ...props }: any) {
	return (
		<View row paddingV-16>
			<Image
				style={RegisterStyle.logo}
				source={require('../../assets/logo.svg')}
			></Image>
			<View centerV>
				<Text primary text60>
					CRÍTICOS
				</Text>
				<Text h4 text70 style={{ letterSpacing: 8 }}>
					PELADINEA
				</Text>
				<View></View>
			</View>
		</View>
	);
}
