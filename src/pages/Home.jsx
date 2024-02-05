import Layout from 'components/Layout'
import LetterSendingBox from "components/Home/LetterSendingBox";
import LetterBoxSelector from "components/Home/LetterBoxSelecter";
import LetterSummaryView from "components/Home/LetterSummaryView";

function Home() {
    return <Layout >
        <LetterSendingBox />
        <LetterBoxSelector />
        <LetterSummaryView />
    </Layout>

}

export default Home 