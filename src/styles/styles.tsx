import { Button, Paper } from "@mui/material";
import styled from "styled-components";
type StyleChangeType = {
  $width?: string;
  $height?: string; // textColor 속성을 추가
}



export const StyledButton = styled(Button) <StyleChangeType>`
width:${props => props.$width};
height:${props => props.$height};
min-height: 30px;
min-width: 125px;
background: #FFFFFF;
border: 1px solid #E5E5E5  !important;
font-size:12px !important; 
line-height: 14.06px !important;
font-family:"Roboto" !important;
font-weight: 400 !important;
color: black !important;
`

export const ErrorMessageWrapper = styled(Paper)`
  font-size: 14px;
  color: red;
  background-color: white;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,140%);
  font-weight: bold;
`;

export const StyledTextField = styled.textarea`
margin:5px;
width: 250px;
height:30px;
position: absolute;
align-items: center;
resize: none;
border: 1px solid #38A5E1;
border-radius: 3px;
box-sizing: border-box;
outline-color: #38A5E1;
`;

export const StyledDiv = styled.div<StyleChangeType>`
    width:${props => props.$width};
    height:${props => props.$height};
    font-family: Roboto;
    font-weight: 400;
    font-size:14px;
    line-height: 16.41px;
    padding-top: 12px;
    margin-left:12px;
    margin-bottom: 12px;
    word-break: break-all;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow:hidden;
    display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
`
export const StyledUrlDiv = styled.div<StyleChangeType>`
    width:${props => props.$width};
    height:${props => props.$height};
    font-family: Roboto;
    font-weight: 400;
    font-size:14px;
    line-height: 16.41px;
    padding-top: 17px;
    margin-left:17px;
    word-break: break-all;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow:hidden;
    display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    
`
