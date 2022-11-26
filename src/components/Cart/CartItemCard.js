import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../state/actions';

const CardItemCard = ({ id, title, price, image, quantity }) => {
  const cartItem = { id, title, price, image, quantity };
  const product = { id, title, price, image };
  const dispatch = useDispatch();

  const formatTitle = (title) => {
    return title.length <= 14 ? title : title.substr(0, 14) + '...';
  };

  const sumPrice = () => {
    return (cartItem.price * cartItem.quantity).toFixed(2);
  };

  return (
    <div className="flex">
      <div className="w-1/5 h-[6rem] m-auto">
        <img className="h-full w-auto" src={image} alt=""></img>
      </div>
      <div className="flex flex-col items-center justify-between w-full text-lg gap-2">
        <div className="overflow-hidden font-bold h-8">
          {formatTitle(title)}
        </div>
        <div>${sumPrice()}</div>
        <div className="flex items-center gap-4">
          <button
            className="flex items-center justify-center p-2 font-bold w-full bg-gray-200 text-black hover:bg-black hover:text-white"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <FaMinus />
          </button>
          <div>{cartItem.quantity}</div>
          <button
            className="flex items-center justify-center p-2 font-bold w-full bg-gray-200 text-black hover:bg-black hover:text-white"
            onClick={() => dispatch(addToCart(product))}
          >
            {' '}
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItemCard;