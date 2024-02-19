import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import LetterDetailPage from 'pages/LetterDetailPage';
import { Provider } from 'react-redux';
import store from 'store/redux/config/configStore';

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
          <Route path='/' element={<Home />} />
          <Route path='details/:id' element={<LetterDetailPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
