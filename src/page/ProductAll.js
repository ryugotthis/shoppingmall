import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList, setProductList] = useState(null);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값', searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    // let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data?', data);
    setProductList(data);
    console.log('list', productList);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="product-all">
      <Container>
        <Row>
          {productList?.map((menu, index) => (
            <Col lg={3} className="margin-item">
              <ProductCard item={menu} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
