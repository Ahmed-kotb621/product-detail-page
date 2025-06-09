import { create } from "zustand";

type CartDrawerStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useCartDrawerStore = create<CartDrawerStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
