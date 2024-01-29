import React from 'react'
import Header from "components/Header";
import styled from 'styled-components';
import ResetStyles from './ResetStyles';

const LayoutWrap = styled.div`
    width: 710px;
    min-height: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #DDF2F9;;

`
const MainWrap = styled.div`
    display: flex;
    justify-content: center;
`

function Layout({ children }) {
    return (
        <MainWrap>
            <ResetStyles />
            <LayoutWrap>
                <Header></Header>
                {children}
            </LayoutWrap>
        </MainWrap>
    )
}

export default Layout