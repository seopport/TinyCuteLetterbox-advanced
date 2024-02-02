import React, { useContext } from 'react'
import LetterDetailView from 'components/Detail/LetterDetailView'
import Layout from 'components/Layout'
import { LetterContext } from 'context/LetterContext'


function LetterDetailPage() {
    // const savedLetters = useContext(LetterContext.savedLetters)
    // const setSavedLetters = useContext(LetterContext.setSavedLetters)

    //saved letter 받아와서 item id로 필터해서 렌더
    return (
        <Layout>
            <LetterDetailView></LetterDetailView>
        </Layout>
    )
}

export default LetterDetailPage