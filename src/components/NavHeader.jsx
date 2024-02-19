import React from 'react'
import { NavLink } from 'react-router-dom'
import colors from 'shared/color'
import styled from 'styled-components'

const StNavHeaderContainer = styled.nav`
    width: 100%;
    height: 2.5rem;
    background-color: #63a0bd;
    display: flex;
    align-items: center;
    padding: 0 30px;
`

const StNavLink = styled(NavLink)`  
    color: white;
    text-decoration: none;
    font-family: "UhBeeSe_hyun", serif;
    opacity: 50%;
    transition: all 0.2s;

    &:hover {
        opacity: 100%;
        /* transform: rotate(3deg); */
    }
    
    &.active {
        opacity: 100%;
    }
`

const NavHeader = () => {
    return (
        <StNavHeaderContainer>
            <StNavLink to={'home'}>Home</StNavLink>
            <div style={{ marginLeft: "auto" }}>
                <StNavLink to={'myPage'} style={{ marginRight: "20px" }}>MyPage</StNavLink>
                <StNavLink to={'login'}>Login</StNavLink>
            </div>
        </StNavHeaderContainer>
    )
}

export default NavHeader