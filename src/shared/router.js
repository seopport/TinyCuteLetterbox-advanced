import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/Main/Home";
import LetterDetailPage from "components/Detail/LetterDetailPage";
import { useState, useEffect } from "react";

const Router = () => {
  const [selectedCharacter, setSelectedCharacter] = useState("chiikawa");
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedCharacter={selectedCharacter}
              setSelectedCharacter={setSelectedCharacter}
              savedLetters={savedLetters}
              setSavedLetters={setSavedLetters}
            />
          }
        />
        <Route
          path="details/:id"
          element={
            <LetterDetailPage
              savedLetters={savedLetters}
              setSavedLetters={setSavedLetters}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
