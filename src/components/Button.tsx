import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button, ButtonProps, Colors, ThemeManager } from 'react-native-ui-lib';

const CustomButton = ({
	title,
	onPress,
	styles = {},
}: {
	title: string;
	onPress: () => void;
	styles?: Partial<ButtonProps>;
}) => {
	return (
		<Button
			bg-primary
			white
			label={title}
			{...styles}
			onPress={onPress}
		></Button>
	);
};

export default CustomButton;
