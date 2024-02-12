import React from 'react';
import { TextInput } from 'react-native-paper';

interface CustomTextInputProps {
	// Props with default value
	enableErrors?: boolean;
	validate?: any[];
	validationMessage?: string[];
	// Props required

	// Props optional
	otherProps?: {
		[key: string]: any;
	};

	label: string;
	value: string;
	onChangeText: (e: string) => void;
	onBlur: (field: any) => void;

	required?: boolean;
}

const CustomTextInput = React.forwardRef(
	(props: CustomTextInputProps, ref: any) => {
		return (
			<TextInput
				ref={ref}
				label={props.label}
				value={props.value}
				onChangeText={props.onChangeText}
				onBlur={props.onBlur}
				mode={'outlined'}
				{...props.otherProps}
			/>
		);
	}
);
export default CustomTextInput;
