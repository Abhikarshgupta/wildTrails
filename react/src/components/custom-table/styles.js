import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)`
	border-radius: 0 !important;
	font-family: Open Sans !important;
	font-size: 0.9vw !important;
	letter-spacing: -0.01em !important;
	color: #0f172a !important;

	& .MuiDataGrid-columnHeader--moving {
		background-color: rgb(241, 245, 249) !important;
	}

	& .MuiDataGrid-withBorderColor {
		background-color: rgb(241, 245, 249);
	}

	& .MuiDataGrid-cell {
		background-color: #fff !important;
		height: auto !important;
		padding: 1vw 0.7vw !important;
	}
	& .MuiCheckbox-root {
		padding: 0vw !important;
	}

	& .MuiDataGrid-row {
		cursor: pointer;
	}
	& .MuiDataGrid-virtualScroller {
		overflow-x: ${(props) =>
			props.shouldOverflow ? "auto" : "hidden"} !important;
		z-index: 0 !important;
	}
`;
