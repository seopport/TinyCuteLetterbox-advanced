import React, { useEffect, useState } from 'react'
import Header from "components/Header";
import styled from 'styled-components';
import ResetStyles from './ResetStyles';
import { Outlet, useNavigate } from 'react-router-dom';

const LayoutWrap = styled.div`
    width: 710px;
    min-height: 961px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #DDF2F9;;

`
const MainWrap = styled.div`
    display: flex;
    justify-content: center;
    background-color: #eef9fd;;
`

function Layout() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigage = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigage('/login');
        } else {
            navigage('/home');
        }
    }, [])

    return (
        <MainWrap>
            <ResetStyles />
            <LayoutWrap>
                <Header />
                <Outlet />
            </LayoutWrap>
        </MainWrap>
    )
}

export default Layout