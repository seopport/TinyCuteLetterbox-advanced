import LetterSendingBox from 'components/Home/LetterSendingBox';
import LetterBoxSelector from 'components/Home/LetterBoxSelecter';
import LetterSummaryView from 'components/Home/LetterSummaryView';
import {useEffect} from 'react';
import letterApi from 'apis/letterApi';
import {useDispatch} from 'react-redux';
import {sendLetter} from 'store/redux/modules/letters';

function Home() {
  return (
    <>
      <LetterSendingBox />
      <LetterBoxSelector />
      <LetterSummaryView />
    </>
  );
}

export default Home;
