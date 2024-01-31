import React from 'react'
import LetterDetailView from 'components/Detail/LetterDetailView'
import Layout from 'components/Layout'
import { useLocation, useParams } from 'react-router-dom'


function LetterDetailPage({ savedLetters }) {


    //saved letter 받아와서 item id로 필터해서 렌더
    return (
        <Layout>
            <LetterDetailView savedLetters={savedLetters}></LetterDetailView>
        </Layout >
    )
}

export default LetterDetailPage