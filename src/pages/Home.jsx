import Layout from 'components/Layout'
import LetterSendingBox from "components/Home/LetterSendingBox";
import LetterBoxSelector from "components/Home/LetterBoxSelecter";
import LetterSummaryView from "components/Home/LetterSummaryView";
import LoginPage from './LoginPage';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

function Home() {
    return < >
        <LetterSendingBox />
        <LetterBoxSelector />
        <LetterSummaryView />
    </>

}

export default Home 