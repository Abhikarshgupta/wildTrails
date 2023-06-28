/* eslint-disable react/prop-types */
import { Stack, TextField } from "@mui/material";
import { StyledFlexContainer } from "../../styles/globalStyles";

const CustomTextInput = ({
	multiline = false,
	rows = 2,
	label = "",
	placeholder = "",
	value = "",
	onChange = () => {},
	required,
	error,
	inputType = "text",
	disabled = false,
}) => {
	console.log({ inputType });
	return (
		<Stack rowGap={1}>
			<StyledFlexContainer flexStart>
				{label} {required && <span style={{ color: "#DC2626" }}>*</span>}
			</StyledFlexContainer>
			{multiline && (
				<TextField
					aria-label={`multilineTextInput-${label}`}
					variant='outlined'
					multiline
					fullWidth
					rows={rows}
					placeholder={placeholder || label}
					required={required}
					error={error}
					value={value}
					onChange={onChange}
				/>
			)}
			{!multiline && (
				<TextField
					aria-label={`TextInput-${label}`}
					variant='outlined'
					size='small'
					fullWidth
					placeholder={placeholder || label}
					required={required}
					error={error}
					value={value}
					onChange={onChange}
					type={inputType}
					disabled={disabled}
				/>
			)}
		</Stack>
	);
};

export default CustomTextInput;
