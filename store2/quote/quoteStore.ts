import axios from "axios";
import { StoreSlice } from "..";

export interface Quote {
  data: { quote: string };
  pending: boolean;
  error: boolean;
}

export interface QuoteStore {
  quote: Quote;
  getKanyeQuote: () => void;
}

export const createQuoteSlice: StoreSlice<QuoteStore> = (set) => ({
  quote: {
    data: { quote: "" },
    pending: false,
    error: false,
  },
  getKanyeQuote: async () => {
    set((state) => ({
      quote: {
        data: state.quote.data,
        pending: true,
        error: false,
      },
    }));
    const response = await axios.get("https://api.kanye.rest/");
    set((state) => ({
      quote: {
        data: { quote: response.data.quote },
        pending: false,
        error: false,
      },
    }));
  },
});
