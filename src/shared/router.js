import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/Main/Home";
import LetterDetailPage from "components/Detail/LetterDetailPage";
import { useState, useEffect } from "react";
import { LetterContext } from "context/LetterContext";
import { Provider, UseSelector, useSelector } from "react-redux";
import store from "store/redux/config/configStore";

const Router = () => {
  const [savedLetters, setSavedLetters] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("http://localhost:4000/data");
        const data = await res.json();
        setSavedLetters(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<LetterDetailPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
