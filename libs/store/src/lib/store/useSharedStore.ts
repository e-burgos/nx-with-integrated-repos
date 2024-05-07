import { create } from 'zustand';
import { storage } from '../helpers/localStorage';

export interface ISharedStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useSharedStore = create<ISharedStore>((set) => {
  const count = storage.get('count') || 0;
  return {
    count: 0 || count,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  };
});
