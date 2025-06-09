import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Product, ProductVariant } from "../types/product";

interface ProductStore {
  product: Product | null;
  loading: boolean;
  error: string | null;
  selectedVariations: Record<string, string>;
  selectedVariant: ProductVariant | null;

  // Actions
  fetchProduct: (slug: string) => Promise<void>;
  setSelectedVariation: (variationType: string, value: string) => void;
  clearSelectedVariations: () => void;

  // Computed
  getCurrentPrice: () => number;
  getCurrentSalePrice: () => number;
  isVariantAvailable: () => boolean;
}

export const useProductStore = create<ProductStore>()(
  immer((set, get) => ({
    product: null,
    loading: false,
    error: null,
    selectedVariations: {},
    selectedVariant: null,

    fetchProduct: async () => {
      set((state) => {
        state.loading = true;
        state.error = null;
      });
      try {
        const res = await fetch(
          `https://api.easy-orders.net/api/v1/products/slug/clear-theme/Sneakers12?join=reviews`
        );
        const data = await res.json();
        set((state) => {
          state.product = data;
          state.loading = false;
        });
      } catch (error) {
        set((state) => {
          state.error = "Failed to fetch product";
          state.loading = false;
        });
      }
    },

    setSelectedVariation: (type, value) => {
      set((state) => {
        state.selectedVariations[type] = value;
      });
    },

    clearSelectedVariations: () => {
      set((state) => {
        state.selectedVariations = {};
      });
    },

    getCurrentPrice: () => {
      const variant = get().selectedVariant;
      return variant ? variant.price : get().product?.price || 0;
    },

    getCurrentSalePrice: () => {
      const variant = get().selectedVariant;
      return variant
        ? variant.sale_price || variant.price
        : get().product?.sale_price || get().product?.price || 0;
    },

    isVariantAvailable: () => {
      return !!get().selectedVariant;
    },
  }))
);
