import toast from "react-hot-toast";
import { useCartDrawerStore } from "../stores/cartDrawerStore";
import { useCartStore } from "../stores/cartStore";

const CartDrawer = () => {
  const { isOpen, close } = useCartDrawerStore();
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <aside
      className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={close} className="text-xl font-bold">
          &times;
        </button>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {items.length === 0 ? (
          <div className="text-gray-500">Your cart is empty.</div>
        ) : (
          items.map((item) => (
            <div
              key={item.productId + item.variantId}
              className="flex items-center gap-3 border-b pb-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">
                  {item.color && <span>Color: {item.color} </span>}
                  {item.size && <span>Size: {item.size}</span>}
                </div>
                <div className="text-sm">Qty: {item.quantity}</div>
                <div className="text-sm font-bold">
                  ${item.price * item.quantity}
                </div>
              </div>
              <button
                onClick={() => removeItem(item.productId, item.variantId)}
                className="text-red-500 hover:text-red-700 text-lg font-bold"
                title="Remove"
              >
                &times;
              </button>
            </div>
          ))
        )}
      </div>
      <div className="m-3">
        <p>
          Total Price :{" "}
          <span className="font-semibold text-darkPrice">${totalPrice()}</span>
        </p>
      </div>
      <div className="flex gap-3 justify-between mx-3">
        <button
          className=" border-red-500 py-3 px-7 rounded-full border-[1px] flex-1 hover:text-red-500"
          onClick={() => {
            clearCart();
            toast.success("Cart Cleared Successfully!");
          }}
        >
          Clear Cart
        </button>
        <button className=" border-orange bg-orange py-3 px-7 rounded-full border-[1px] flex-1 hover:text-white">
          Order Now
        </button>
      </div>
    </aside>
  );
};

export default CartDrawer;
