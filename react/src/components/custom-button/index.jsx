/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { THEME } from "../../styles/theme";

const colorMap = {
	red: THEME.danger,
	green: THEME.success,
	orange: THEME.warning,
	DMC: `#17a2b8`,
};

/**
 * Wrapper around MUI button for consistency and less prop drilling
 * @param {*} param0 color, text, onclick, startIcon.
 * @returns mui button with styling from props.
 * --------------------
 * possible color values:- red, green, blue, orange.
 */
const CustomButton = ({ color, text, onClick, startIcon = <></> }) => {
	return (
		<Button
			variant='contained'
			size='small'
			onClick={onClick}
			sx={{
				backgroundColor: colorMap[color],
				"&.MuiButtonBase-root:hover": {
					bgcolor: colorMap[color],
				},
			}}
			startIcon={startIcon}>
			{text}
		</Button>
	);
};

export default CustomButton;
