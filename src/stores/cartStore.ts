import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  name: string;
  color?: string;
  size?: string;
  price: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  hydrate: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  // setHydrated: (hydrated: boolean) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    immer((set, get) => ({
      items: [],
      hydrate: false,
      addToCart: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.productId === item.productId && i.variantId === item.variantId
          );
          if (existing) {
            existing.quantity += item.quantity;
          } else {
            state.items.push(item);
          }
        }),
      removeFromCart: (productId, variantId) =>
        set((state) => {
          state.items = state.items.filter(
            (i) => !(i.productId === productId && i.variantId === variantId)
          );
        }),
      clearCart: () =>
        set((state) => {
          state.items = [];
        }),
      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      // setHydrated: (hydrate) => set({ hydrate }),
    })),
    {
      name: "cart-storage",
      partialize: (state) => ({ items: state.items }),
      // onRehydrateStorage: (state) => {
      //   // This will be called after rehydration is complete
      //   state?.setHydrated(true);
      // },
    }
  )
);
