# Product Detail Page
  
*Live demo:* [https://product-detail-page-kappa.vercel.app/](https://product-detail-page-kappa.vercel.app/)

---

## 1. Project Overview

This is a React-based **Product Detail Page** showcasing a product with variants, descriptions, pricing, and cart management. The project features:

- Responsive UI with Tailwind CSS
- Zustand + Immer for state management
- Modular component architecture
- Integration with a cart drawer
- Price formatting helper functions
- Clean separation of UI and logic

---
## 2. Setup Instructions

Follow these steps to get the project up and running locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ahmed-kotb621/product-detail-page.git
   cd product-detail-page
   ```
2. **Install Dependencies:**

   ```bash
   npm i
   ```
3. **Start the development server:**

   ```bash
   npm start
   ```

## 3. State Management (Zustand + Immer)

This project uses Zustand with Immer middleware for modular, predictable, and persistent state management.
```tsx
productStore
```
Manages the product, selected variations, current variant, and computed prices.
```ts
interface ProductStore {
  product: Product | null;
  loading: boolean;
  error: string | null;
  selectedVariations: Record<string, string>;
  selectedVariant: ProductVariant | null;

  fetchProduct: (slug: string) => Promise<void>;
  setSelectedVariation: (variationType: string, value: string) => void;
  clearSelectedVariations: () => void;

  getCurrentPrice: () => number;
  getCurrentSalePrice: () => number;
  isVariantAvailable: () => boolean;
}

```

```tsx
cartStore
```
Cart State with Persistence
<br />
Handles cart actions and persists data with Zustand's persist middleware.
```ts
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
}

```

## 4. API Integration & Data Fetching
This project integrates with the EasyOrders API to fetch dynamic product data using React Query for efficient data management.
**React Query:**
- Handles API calls, caching, loading and error states.
- Provides built-in features like query invalidation and retry logic.

```ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};
```
**axios create api instance**
```ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.easy-orders.net/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
```

## 5. Component Documentation

### `ProductInfo`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `data`     | `ProductData`      | Yes      | Object containing product details (id, name, price, sale_price, description, variants) |
| `isLoading`| `boolean`          | Yes      | Loading state to show skeleton UI   |
| `error`    | `unknown`          | No       | Error state to display error message|

**Usage:**

```tsx
<ProductInfo data={productData} isLoading={loading} error={error} />
```

### `ProductImageGallery`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `data`     | `ProductData`      | Yes      | Object containing product details (id, name, price, sale_price, description, variants) |
| `isLoading`| `boolean`          | Yes      | Loading state to show skeleton UI   |
| `error`    | `unknown`          | No       | Error state to display error message|

**Usage:**

```tsx
<ProductImageGallery data={productData} isLoading={loading} error={error} />
```

### `Colors`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `variants` | `Variant`         | Yes      | Object containing product variations (colors to select one) |


**Usage:**

```tsx
<Colors variants={data.variants} />
```
### `Size`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `variants` | `Variant`         | Yes      | Object containing product variations (size to select one) |


**Usage:**

```tsx
 <Size variants={data.variants} />
```

### `CartDrawer`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `items`    | `CartItem`        | Yes      | Object containing cart selected product details (id, name, price, size,image,color) |
| `removeItem()`| `func()`       | Yes      | remove cart item   |
| `clearCart`    | `func()`      | Yes      | clear all items from cart|

**Usage:**

```tsx
<CartDrawer />
```

### `ProductDescription`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `description`    | `string`        | Yes      | string description of product |


**Usage:**

```tsx
<ProductDescription description={data.description} />
```

### `Card`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `product`    | `CardProps`      | Yes      | Object containing product details ( name, price,image,color,description) |

**Usage:**

```tsx
<Card key={product.id} product={product} />
```
### `CircleRating`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `rating`    | `number`        | Yes      | retrun rating progress as circle around rating  |

**Usage:**

```tsx
<CircleRating rating={4.6} />
```

### `Feedback`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `reviews`    | `ReviewsProps`    | Yes      | retrun clients feedback  |

**Usage:**

```tsx
  <Feedback />
```

### `StarRating`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `rating`    | `number`        | Yes      | retrun rating as stars |

**Usage:**

```tsx
<StarRating rating={4.6} />
```

### `RelatedProducts`

**Props:**

| Name       | Type              | Required | Description                            |
|------------|-------------------|----------|------------------------------------|
| `relatedProducts` | `string[]`        | Yes      | return list of related products to product |

**Usage:**

```tsx
<StarRating rating={4.6} />
```
