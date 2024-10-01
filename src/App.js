import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Main from './page/Main';
import NotFound from './page/NotFound';
import Navebar from './component/Navebar';
import { Reset } from 'styled-reset';

//1. 전체 상품 페이지, 상품 상세페이지, 로그인 페이지
//1.1 네비게이션바
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품 디테일을 눌렀으나, 로그인이 안되어있으면 로그인 페이지가 먼저 나온다.
//5. 로그아웃 버튼을 클릭하면 로그아웃 된다.
//6. 로그아웃 되면 상품 상제 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
//7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//8. 상품을 검색할 수 있다.

function App() {
  return (
    <div>
      <Reset />
      <Navebar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<ProductAll />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        {/* 일치하는 라우트가 없는 경우 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
