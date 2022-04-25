import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { createQuoteSlice, QuoteStore } from "./quote/quoteStore";
import { createCounterSlice } from "./counter/counterStore";

export type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T;

const useStore = create(
  devtools((set: SetState<any>, get: GetState<any>) => ({
    ...createCounterSlice(set, get),
    ...createQuoteSlice(set, get),
  }))
);

export default useStore;
