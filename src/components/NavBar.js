import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../state/actions';

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sumQuantity = () => {
    return cart.reduce(
      (quantity, cartItem) => quantity + cartItem.quantity,
      0
    );
  };

  return (
    <header className="bg-black px-4">
      <div className="flex flex-col items-center justify-between w-full max-w-[140rem] my-0 mx-auto p-4 md:flex-row">
        <h1 className="font-bold text-2xl text-[#46ffd3] min-w-min">
          Redux-Shop
        </h1>
        <nav className="flex items-center w-full justify-end text-lg">
          <div
            className="relative cursor-pointer hover:scale-110 active:scale-105"
            onClick={() => dispatch(openCart())}
          >
            <button className=" rounded-full flex items-center justify-center p-2 font-bold bg-white">
              <FaShoppingCart />
            </button>
            {sumQuantity() > 0 ? (
              <div className="absolute top-5 right-5 flex items-center justify-center w-6 h-6 rounded-full font-bold text-lg bg-red-400">
                {sumQuantity()}
              </div>
            ) : (
              ''
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;