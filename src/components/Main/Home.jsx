import Layout from 'components/Layout'
import LetterSendingBox from "components/Main/LetterSendingBox";
import LetterBoxSelector from "components/Main/LetterBoxSelecter";
import LetterSummaryView from "components/Main/LetterSummaryView";
import { useState } from 'react';
import { CharacterContext } from 'context/CharacterContext';

function Home() {
    const [selectedCharacter, setSelectedCharacter] = useState("chiikawa");

    return <Layout >
        {/* 감싸진 내용이 Layout의 children props로 들어간다. */}
        <CharacterContext.Provider value={{
            selectedCharacter,
            setSelectedCharacter
        }}>
            <LetterSendingBox />
            <LetterBoxSelector />
            <LetterSummaryView />
        </CharacterContext.Provider>
    </Layout>

}

export default Home 