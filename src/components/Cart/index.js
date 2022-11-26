import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItemCard from './CartItemCard';
import { closeCart } from '../../state/actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const isCartOpen = useSelector((state) => state.isCartOpen);
  const dispatch = useDispatch();

  const sumTotal = () => {
    return cart
      .reduce(
        (total, cartItem) =>
          total + cartItem.price * cartItem.quantity,
        0
      )
      .toFixed(2);
  };

  const cartItems = cart.map((cartItem) => (
    <CardItemCard
      key={Math.random()}
      id={cartItem.id}
      title={cartItem.title}
      price={cartItem.price}
      image={cartItem.image}
      quantity={cartItem.quantity}
    ></CardItemCard>
  ));

  if (isCartOpen) {
    return (
      <>
        <div
          className="fixed z-50 top-0 right-0 flex flex-col items-center gap-8 w-full h-full p-6 bg-white text-xl md:w-[30rem]"
          isOpen={isCartOpen}
        >
          <div className="font-bold mb-6 text-xl">
            Your shopping cart
          </div>
          <div className="flex flex-col gap-8 w-full overflow-auto">
            {cartItems}
          </div>
          <div className="font-bold">Total: ${sumTotal()}</div>
          <button className="flex items-center justify-center p-4 font-bold w-3/4 bg-[#46FFD3] hover:bg-[#35eec2]">
            Checkout
          </button>
          <button
            className="flex items-center justify-center p-4 font-bold w-3/4 bg-red-500 hover:bg-red-300"
            onClick={() => dispatch(closeCart())}
          >
            Close
          </button>
        </div>

        <div
          className="fixed top-0 w-full h-full opacity-60 bg-black"
          onClick={() => dispatch(closeCart())}
        />
      </>
    );
  }
  return <></>;
};

export default Cart;