import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import LetterSendingBox from "components/Main/LetterSendingBox";
import LetterBoxSelector from "components/Main/LetterBoxSelecter";
import LetterSummaryView from "components/Main/LetterSummaryView";
import EmptyLetterBoxMessage from "components/Main/EmptyLetterBoxMessage";

function Home({ savedLetters, setSavedLetters, selectedCharacter, setSelectedCharacter }) {

    return <Layout >
        {/* 감싸진 내용이 Layout의 children props로 들어간다. */}
        <LetterSendingBox savedLetters={savedLetters} setSavedLetters={setSavedLetters}></LetterSendingBox>
        <LetterBoxSelector selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}></LetterBoxSelector>
        <LetterSummaryView selectedCharacter={selectedCharacter} savedLetters={savedLetters}></LetterSummaryView>
    </Layout>

}

export default Home 