import React from 'react';
import { Link } from 'react-router-dom';

export const Cart = () => (
  <>
    <Link
      to="/cart"
      className='fixed bottom-20 right-5 rounded-full bg-amber-500 text-white text-2xl px-3 py-2'>
      🛒
    </Link>
  </>
);

