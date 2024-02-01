import React from 'react'
import LetterDetailView from 'components/Detail/LetterDetailView'
import Layout from 'components/Layout'


function LetterDetailPage({ savedLetters, setSavedLetters }) {


    //saved letter 받아와서 item id로 필터해서 렌더
    return (
        <Layout>
            <LetterDetailView
                savedLetters={savedLetters}
                setSavedLetters={setSavedLetters}
            ></LetterDetailView>
        </Layout >
    )
}

export default LetterDetailPage