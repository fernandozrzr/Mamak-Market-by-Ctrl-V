// hooks/useListingContext.js
import { useContext } from "react";
import { ListingContext } from "../context/ListingContext";

export const useListingContext = () => {
    const context = useContext(ListingContext);
    if (!context) {
        throw new Error("useListingContext must be used within a ListingContextProvider");
    }
    return context;
};
