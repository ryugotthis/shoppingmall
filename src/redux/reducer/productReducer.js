import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
let initialState = {
  productList: [],
  productDetailList: null,
  isLoading: false,
  error: null,
};

// 2개의 파라미터 action 타입(이름)의 string, 하고 싶은 일 콜백함수(promise 리턴)
// 콜백함수는 2개의 매개변수 받음(arg, thunkAPI)
// arg: api 호출 전 넘겨야하는 single value
export const fetchProducts = createAsyncThunk(
  'product/fetchAll',
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/ryugotthis/shoppingmall-toolkit/products?q=${searchQuery}`;
      let response = await fetch(url);
      // promise 리턴
      return await response.json();
    } catch (error) {
      // fetchProducts.rejected로 error 메시지 action.payload로 보냄
      thunkApi.rejectWithValue(error.message);
    }
  }
);
// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case 'GET_PRODUCT_SUCCESS':
//       return { ...state, productList: payload.data };
//     case 'GET_PRODUCT_DETAIL_SUCCESS':
//       return { ...state, productDetailList: payload.data };
//     default:
//       return { ...state };
//   }
// }

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // 리덕스에서 직접적 호출되는 경우 like dispatch
    // getAllProducts(state, action) {
    //   state.productList = action.payload;
    //   console.log('haha', action.payload);
    // },
    getSingleProduct(state, action) {
      state.productDetailList = action.payload;
      // state.productList = action.payload;
      console.log('haha', action.payload);
    },
  },
  //외부 라이브러리에 의해서 호출이 되는 경우
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        // 성공이 된 케이스니까 isLoading 먼저 false로 만들어줌
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        //에러시 try catch문에서 받은 error.message를 action으로 받을수 있음
        state.error = action.payload;
      });
  },
});

console.log('pppp', productSlice);
console.log('actions이 뭐지?', productSlice);
console.log('reducer이 뭐지?', productSlice.reducer);
console.log('caseReducers', productSlice.caseReducers);

// export default productReducer;
export const productActions = productSlice.actions;

// reducer에 모든 reducers들이 나
export default productSlice.reducer;
