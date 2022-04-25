import React from "react";
import { useQuoteStore } from "../store/quote/quoteStore";
import useStore from "../store2/index";

export default function Kayne() {
  const { quote, getKanyeQuote } = useStore();
  return (
    <div>
      <h2>Generate random Kanye West quote</h2>
      {quote.pending && <p>Loading...</p>}
      {quote.data && <p>{quote.data.quote}</p>}
      {quote.error && <p>Oops, something went wrong</p>}
      <button onClick={() => getKanyeQuote()} disabled={quote.pending}>
        Generate Kanye Quote
      </button>
    </div>
  );
}
