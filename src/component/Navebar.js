import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Navebar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    'Women',
    'Men',
    'Baby',
    'Kids',
    'H&M HOME',
    'Sport',
    'Sale',
    '지속가능성',
  ];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
    setAuthenticate(false);
  };
  const goToProduct = () => {
    navigate('/product');
    console.log('product clicked');
  };
  const search = (event) => {
    // console.log(event);
    // event.key == 'Enter' ? console.log('enter') : console.log('노');
    if (event.key == 'Enter') {
      let target = event.target.value;
      // url을 바꿔준다
      navigate(`/product?q=${target}`);
    }
    // 입력한 검색어를 읽어와서(js에서는 value속성을 사용했지만 react에서는 event 속성 활용)

    // console.log(target);
  };
  return (
    <div className="navebar">
      <div className="first-row">
        <div className="left"></div>
        <div className="middle logo">
          <img
            src="https://cdn.cookielaw.org/logos/6e0ffeab-df84-4fee-b293-9e6498bfa887/697b276d-c669-4d88-b115-dd9e6cae3fae/28a9d5ed-4776-4fe0-9e19-007e8ed817a9/709px-H&M-Logo.svg.png"
            alt="로고"
          ></img>
        </div>
        <div className="right">
          <div className="log-in" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} className="img-login" />
            <div>{authenticate ? '로그아웃' : '로그인'}</div>
          </div>
          <div className="like">
            <FontAwesomeIcon icon={faHeart} className="img-heart" />
            <div>즐겨찾기</div>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="to-right">
          <ul className="menu">
            {menuList.map((menu) => (
              <li onClick={goToProduct}>{menu}</li>
            ))}
          </ul>
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-search" />
            {/* OnKeyPress가 더 이상 사용되지 않는다고 함*/}
            <input
              placeholder="검색"
              onKeyDown={(event) => search(event)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
