import React from 'react';

const ProductCard = ({ item, key }) => {
  console.log('card', item.new);
  return (
    <div className="productcard">
      <img src={item?.img} width="inherit" className="img-fluid" />
      <div>{item ? (item.choice ? 'conscious choice' : '') : ''}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item ? item.new ? <p className="new">new</p> : '' : ''}</div>
    </div>
  );
};

export default ProductCard;
