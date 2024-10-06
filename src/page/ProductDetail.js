import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  console.log('사이즈정보', product?.size);

  return (
    <div className="product-detail">
      <div className="img-box">
        <img src={product?.img} />
      </div>
      <div className="detail-box">
        <h2 className="title">{product?.title}</h2>
        <p className="price">판매가 {product?.price}원</p>
        <label for="size">사이즈</label>
        <select className="size-option-box">
          <option>선택</option>
          {product?.size.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductDetail;
