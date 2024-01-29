import React from 'react'
import Layout from 'components/Layout'
import LetterSendingBox from "components/Main/LetterSendingBox";
import LetterBoxSelector from "components/Main/LetterBoxSelecter";
import LetterSummaryView from "components/Main/LetterSummaryView";
import EmptyLetterBoxMessage from "components/Main/EmptyLetterBoxMessage";
import ResetStyles from 'components/ResetStyles';

function Home() {
    return <Layout >
        {/* 감싸진 내용이 Layout의 children props로 들어간다. */}
        <LetterSendingBox></LetterSendingBox>
        <LetterBoxSelector></LetterBoxSelector>
        <LetterSummaryView></LetterSummaryView>
        <EmptyLetterBoxMessage></EmptyLetterBoxMessage>
    </Layout>

}

export default Home 