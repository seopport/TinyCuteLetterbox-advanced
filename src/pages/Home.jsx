import LetterSendingBox from 'components/Home/LetterSendingBox';
import LetterBoxSelector from 'components/Home/LetterBoxSelecter';
import LetterSummaryView from 'components/Home/LetterSummaryView';

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
