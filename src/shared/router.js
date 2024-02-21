import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from 'pages/Home';
import LetterDetailPage from 'pages/LetterDetailPage';
import LoginPage from 'pages/LoginPage';
import AuthLayout from 'components/AuthLayout';
import MyPage from 'pages/MyPage';
import NonAuthLayout from 'components/NonAuthLayout';

const Router = () => {
  // 로그인하지 않아도 볼 수 있는 페이지 - AuthLayout
  // 로그인 해야만 볼 수 잇는 페이지 - NonAuthLayout

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
