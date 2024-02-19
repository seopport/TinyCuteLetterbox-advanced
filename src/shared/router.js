import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import Home from 'pages/Home';
import LetterDetailPage from 'pages/LetterDetailPage';
import {Provider} from 'react-redux';
import store from 'store/redux/config/configStore';
import {Outlet} from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import SignUp from 'components/Login/SignUp';
import Layout from 'components/Layout';
import {useState} from 'react';
import MyPage from 'pages/MyPage';

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

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="home" element={<Home />} />
            <Route path="myPage" element={<MyPage />} />
          </Route>
          <Route path="details/:id" element={<LetterDetailPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
