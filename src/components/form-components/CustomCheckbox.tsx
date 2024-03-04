import { useState } from 'react';
import { Checkbox } from 'react-native-paper';

interface CustomCheckboxProps {
	label: string;
	value: boolean;
	onChange: (e: boolean) => void;
	[key: string]: any;
}
export default function CustomCheckbox({
	label,
	value,
	onChange,
	...props
}: CustomCheckboxProps) {
	const [status, setStatus] = useState<'checked' | 'unchecked'>(
		value ? 'checked' : 'unchecked'
	);
	const [innerValue, setInnerValue] = useState(value);

	return (
		<Checkbox.Item
			label={label}
			status={status}
			onPress={(_) =>
				setStatus((prev) => {
					const newStatus = prev === 'checked' ? 'unchecked' : 'checked';
					setInnerValue(newStatus === 'checked');
					onChange(newStatus === 'checked');
					return newStatus;
				})
			}
		/>
	);
}
