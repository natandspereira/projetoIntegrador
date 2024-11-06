import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
` 

export const DivLogin = styled.div`
    border:1px solid black;
    width:400px;
    height:400px;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

export const Img = styled.img`
    border-radius:10px 10px 0px 0px;
    width:400px;
    height:80px;
`

export const Label = styled.label`
    margin: 32px 0;
`

export const H3 = styled.h3`
    margin-bottom:2px;
    font-size:1rem;
`

export const Input = styled.input`
    width: 300px;
    height:40px;

    &:hover{
        transition: 0.8s;
        transform: scale(1.1);
    }

    &::placeholder{
        text-align:center;
        font-size:1rem;
    }
`
export const BtnLogin = styled.button`
        width:100px;
        padding:10px;
        border-radius:5px;
        border:none;
        background: #002333;
        color:white;
        margin-bottom:30px;
        font-size:1rem;
`
