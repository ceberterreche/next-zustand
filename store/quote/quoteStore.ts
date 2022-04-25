import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";

export interface Quote {
  data: { quote: string };
  pending: boolean;
  error: boolean;
}

export interface QuoteState {
  value: Quote;
  getKanyeQuote: () => void;
}

export const useQuoteStore = create<QuoteState>((set) => ({
  value: {
    data: { quote: "" },
    pending: false,
    error: false,
  },
  getKanyeQuote: async () => {
    set((state) => ({
      value: {
        data: state.value.data,
        pending: true,
        error: false,
      },
    }));
    const response = await axios.get("https://api.kanye.rest/");
    set((state) => ({
      value: {
        data: { quote: response.data.quote },
        pending: false,
        error: false,
      },
    }));
  },
}));
