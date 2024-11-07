import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background:#002333;
    color:white;
    height:80px;
` 

export const DivPerfilHomer = styled.div`
   display:flex;
   align-items:center;
   gap:20px;
`
export const ImgNotificacao = styled.img`
    width:40px;
`
export const DivHoraHomer = styled.div`
    background:#168100;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 30px auto;
    width:180px;
    height:180px;
    border-radius:50%;
    color:white;
    flex-direction:column;

    p{
        margin:10px 0;
    }
`
export const DivBtnHomer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
export const BtnLoginHomer = styled.button`
    padding:10px;
    width:200px;
    background:#002333;
    color:white;
    font-size: 1rem;
    border-radius:5px;
`
export const DivRealizados = styled.div`
    background:#D9D9D9;
    margin: 10px auto;
    width:400px;
    height:150px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    flex-direction:columns;
    border-radius:5px;
`


export const SubDivRealizados = styled.div`
    width:80px;
    heigth:80px;
    padding:25px;
    border-radius:50%;
    border:none;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#168100;
    color:white;
`

export const DivCalendario = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 60px auto;
`