import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Home from 'pages/Home';
import LetterDetailPage from 'pages/LetterDetailPage';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {Outlet} from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import SignUp from 'components/Login/SignUp';
import AuthLayout from 'components/AuthLayout';
import {useEffect, useState} from 'react';
import MyPage from 'pages/MyPage';
import NonAuthLayout from 'components/NonAuthLayout';
import letterApi from 'apis/letterApi';
import {sendLetter, setLetter} from 'store/redux/modules/letters';
import {updateUserToken} from 'store/redux/modules/authSlice';

const Router = () => {
  // 로그인하지 않아도 볼 수 있는 페이지 - AuthLayout
  // 로그인 해야만 볼 수 잇는 페이지 - NonAuthLayout

  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={accessToken ? 'home' : 'login'} />} />
        <Route path="login" element={<NonAuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="myPage" element={<MyPage />} />
          <Route path="details/:id" element={<LetterDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
