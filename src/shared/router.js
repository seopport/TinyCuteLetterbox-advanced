import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/Main/Home";
import LetterDetailPage from "components/Detail/LetterDetailPage";
import { useState, useEffect } from "react";
import { LetterContext } from "context/LetterContext";

const Router = () => {
  const [savedLetters, setSavedLetters] = useState([]);

  useEffect(() => {
    console.log("useEffect 몇번?");
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
      <LetterContext.Provider
        value={{
          savedLetters,
          setSavedLetters,
        }}
      >
        <Routes>
          <Route path="/" element={<Home savedLetters={savedLetters} />} />
          <Route
            path="details/:id"
            element={<LetterDetailPage savedLetters={savedLetters} />}
          />
        </Routes>
      </LetterContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
