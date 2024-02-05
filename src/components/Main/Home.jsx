import Layout from 'components/Layout'
import LetterSendingBox from "components/Main/LetterSendingBox";
import LetterBoxSelector from "components/Main/LetterBoxSelecter";
import LetterSummaryView from "components/Main/LetterSummaryView";

function Home() {

    return <Layout >
        <LetterSendingBox />
        <LetterBoxSelector />
        <LetterSummaryView />
    </Layout>

}

export default Home 