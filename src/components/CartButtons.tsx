import toast from "react-hot-toast";
import { useCartStore } from "../stores/cartStore";
import { useProductStore } from "../stores/productStores";
import { useCartDrawerStore } from "../stores/cartDrawerStore";

function CartButtons(data: any) {
  const addToCart = useCartStore((state) => state.addToCart);
  const selected = useProductStore((state) => state.selectedVariations);
  const { isOpen, close } = useCartDrawerStore();
  const color = selected.color;
  const size = selected.size;

  const handleAdd = () => {
    const variantKey = Object.entries(selected)
      .map(([k, v]) => `${k}:${v}`)
      .join(", ");

    addToCart({
      productId: data.data.id, // Unique ID
      name: data.data.name,
      price:
        selected?.sale_price && Number(selected.sale_price) > 0
          ? Number(selected.sale_price)
          : selected?.price !== undefined
          ? Number(selected.price)
          : data?.data?.sale_price && Number(data.data.sale_price) > 0
          ? Number(data.data.sale_price)
          : Number(data?.data?.price),

      quantity: Number(selected.quantity) > 1 ? Number(selected.quantity) : 1,
      variantId: variantKey,
      color,
      size,
      image: data.data.images[0],
    });
    toast.success("Successfully Added!");
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-6 pr-9 md:pr-0">
      <button
        onClick={handleAdd}
        className="bg-darkPrice text-nowrap text-white text-[1.125rem] md:text-[1.25rem] font-semibold rounded-lg px-[17px] py-[17px] flex-grow"
      >
        Add To Cart
      </button>
      <button
        onClick={() => useCartDrawerStore.getState().open()}
        className="bg-white text-nowrap text-grayCheckout border-[1px] border-[#B8B8B8] w-[200px] text-[1.125rem] md:text-[1.25rem] font-semibold rounded-lg px-[17px] py-[17px] "
      >
        Checkout Now
      </button>
    </div>
  );
}

export default CartButtons;
