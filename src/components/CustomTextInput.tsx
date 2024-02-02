import React from 'react';
import { TextField } from 'react-native-ui-lib';

interface CustomTextInputProps {
	// Props with default value
	enableErrors?: boolean;
	validate?: any[];
	validationMessage?: string[];
	// Props required
	placeholder: string;

	// Props optional
	otherProps?: {
		[key: string]: any;
	};
	styles?: {
		color?: string;
		labelColor?: string;
		placeholderTextColor?: string;
	};

	value: string;
	onChangeText: (text: string) => void;
	onBlur: (field: any) => void;
}

const CustomTextInput = React.forwardRef(
	(props: CustomTextInputProps, ref: any) => {
		return (
			<TextField
				ref={ref}
				placeholder={props.placeholder}
				enableErrors={props.enableErrors || false}
				validate={props.validate || []}
				validationMessage={props.validationMessage || []}
				value={props.value}
				onChangeText={props.onChangeText}
				onBlur={props.onBlur}
				color={props.styles?.color}
				labelColor={props.styles?.labelColor}
				placeholderTextColor={props.styles?.placeholderTextColor}
				{...props.otherProps}
			/>
		);
	}
);
export default CustomTextInput;
