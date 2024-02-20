import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import Home from 'pages/Home';
import LetterDetailPage from 'pages/LetterDetailPage';
import {Provider} from 'react-redux';
import store from 'store/redux/config/configStore';
import {Outlet} from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import SignUp from 'components/Login/SignUp';
import AuthLayout from 'components/AuthLayout';
import {useState} from 'react';
import MyPage from 'pages/MyPage';
import NonAuthLayout from 'components/NonAuthLayout';

const Router = () => {
  //#region
  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:4000/data");
  //       const data = await res.json();
  //       setSavedLetters(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   loadData();
  // }, []);
  //#endregion

  //로그인하지 않아도 볼 수 있는 페이지 - AuthLayout
  // 로그인 해야만 볼 수 잇는 페이지 - NonAuthLayout
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="login" element={<NonAuthLayout />}>
            <Route index element={<LoginPage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="home" element={<Home />} />
            <Route path="myPage" element={<MyPage />} />
            <Route path="details/:id" element={<LetterDetailPage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
