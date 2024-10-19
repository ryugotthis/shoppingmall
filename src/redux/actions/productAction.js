function getProducts(searchQuery) {
  // 함수를 반환
  return async (dispatch, getState) => {
    // let searchQuery = query.get('q') || '';
    let url = `https://my-json-server.typicode.com/ryugotthis/shoppingmall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // setProductList(data);
    console.log(data);
    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
  };
}

// 미들웨어 함수가 여러개 될 거라서
// 여러개의 함수를 하나의 객체에 담아서 리턴할 예정
export const productAction = { getProducts };
