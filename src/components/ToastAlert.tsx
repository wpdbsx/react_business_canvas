import React from "react"
import styled from "styled-components"

type AlertType = {
    text: string
    bgColor?: string
    textColor?: string
}
type AlertTextDivProps = {
    $bgColor: string;
    $textColor: string; // textColor 속성을 추가
}

const StyleAlertCoverDiv = styled.div`
position: absolute;
width: 25%;
bottom: 0px;
z-index: 2;
align-items: center;
padding: 0 auto;
@media (max-width:1199px){
    width: 100%;
}
/* position: absolute */
`
const StyleAlertTextDiv = styled.div<AlertTextDivProps>`
    background-color: ${props => props.$bgColor};
    color: ${props => props.$textColor};
    border-radius: 8px;
    padding: 17px 16px 17px 16px; 
    font-size: 14px;
    margin: 0 auto;
`;
const ToastAlert: React.FC<AlertType> = ({ text, bgColor = 'white', textColor = 'black' }) => {

    return (
        <>
            <StyleAlertCoverDiv >
                <StyleAlertTextDiv $bgColor={bgColor} $textColor={textColor}>
                    <span>{text}</span>
                </StyleAlertTextDiv>
            </StyleAlertCoverDiv>
        </>
    )
}



export default ToastAlert