import { configureStore } from "@reduxjs/toolkit";
import itineraryListingReducer from "./listing/index";
export const store = configureStore({
	reducer: {
		itineraryListing: itineraryListingReducer,
	},
});
