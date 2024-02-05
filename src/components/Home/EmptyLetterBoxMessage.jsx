import React from 'react'
import "shared/index.css"
import styled from 'styled-components'

const Message = styled.span`
    font-family: "NPSfont-regular";
    color: #2d6277;
`

function EmptyLetterBoxMessage() {
    return (
        <Message>남겨진 편지가 없습니다. 첫 번째 편지를 작성해보세요.</Message>
    )
}

export default EmptyLetterBoxMessage