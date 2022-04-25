import create, { GetState, SetState } from "zustand";
import { StoreSlice } from "..";

export interface CounterStore {
  counter: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
}

export const createCounterSlice: StoreSlice<CounterStore> = (set, get) => ({
  counter: 0,
  increment: () => {
    set((state) => ({ counter: state.counter + 1 }));
  },
  decrement: () => {
    set((state) => ({ counter: state.counter - 1 }));
  },
  incrementByAmount: (amount: number) => {
    set((state) => ({ counter: state.counter + amount }));
  },
});
