import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "components/Main/Home";
import LetterDetailPage from "components/Detail/LetterDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<LetterDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
