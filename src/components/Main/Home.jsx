import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import LetterSendingBox from "components/Main/LetterSendingBox";
import LetterBoxSelector from "components/Main/LetterBoxSelecter";
import LetterSummaryView from "components/Main/LetterSummaryView";
import EmptyLetterBoxMessage from "components/Main/EmptyLetterBoxMessage";

function Home() {
    const [selectedCharacter, setSelectedCharacter] = useState("chiikawa");
    const [savedLetters, setSavedLetters] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('http://localhost:4000/data');
                const data = await res.json();
                setSavedLetters(data)
            } catch (error) {
                console.log(error)
            }

        }
        loadData();
    }, [])



    return <Layout >
        {/* 감싸진 내용이 Layout의 children props로 들어간다. */}
        <LetterSendingBox setSavedLetters={setSavedLetters}></LetterSendingBox>
        <LetterBoxSelector selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter}></LetterBoxSelector>
        <LetterSummaryView selectedCharacter={selectedCharacter} savedLetters={savedLetters} setSavedLetters={setSavedLetters}></LetterSummaryView>
        <EmptyLetterBoxMessage></EmptyLetterBoxMessage>
    </Layout>

}

export default Home 