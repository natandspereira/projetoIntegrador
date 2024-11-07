import styled from "styled-components";

export const DivHeaderLogin = styled.div`
    background:#002333;
    width:500px;
    height:200px;
    border-radius: 0px 0px 0px 300px;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const ImgLogo = styled.img`
    width:300px;
`

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    margin: -140px auto;
` 

export const DivLogin = styled.div`
    border:1px solid black;
    width:300px;
    height:300px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

export const Label = styled.label`
    margin: 10px 0;
`

export const H3 = styled.h3`
    margin:2px 5px;
    font-size:1rem;
`

export const Input = styled.input`
    width: 250px;
    height:30px;

    &:hover{
        transition: 0.8s;
        transform: scale(1.1);
    }

    &::placeholder{
        text-align:center;
        font-size:1rem;
    }
`
export const P = styled.p`
    font-size:1rem;
    font-weight:bold;
    margin-top:20px;
`

export const BtnLogin = styled.button`
        width:100px;
        padding:10px;
        border-radius:5px;
        border:none;
        background: #002333;
        color:white;
        margin:20px 0;
        font-size:1rem;
`
export const DivCorVerde = styled.div`
        background:green;
        position:absolute;
        width:180px;
        bottom:0;
        height:120px;
        border-radius: 0px 200px 0px 0px;
        margin: 0 -40px;
`