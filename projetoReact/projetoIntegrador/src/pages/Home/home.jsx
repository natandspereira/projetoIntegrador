import imgTereza from "../../assets/img/imgTereza.png"
import imgNotificacao from "../../assets/img/notification.png"
import imgMenu from "../../assets/img/Menu.png"
import { 
    Container,
    DivPerfilHomer,
    DivHoraHomer,
    DivBtnHomer,
    BtnLoginHomer,
    DivRealizados,
    SubDivRealizados,
    ImgNotificacao,
    DivCalendario
} from "./style"

function PageHome(){
    return(
        <> 
        <Container>
           <DivPerfilHomer>
                <img src={imgTereza} alt="imagem Tereza"/>
                <h3>Bem vindo (a), Tereza!</h3>
                <ImgNotificacao src={imgNotificacao} alt="imagem notificação"/>
                <img src={imgMenu} alt="imagem Menu"/>
           </DivPerfilHomer>
        </Container>
        
        <DivHoraHomer>
            <h2>15h03s30</h2>
            <p>26/06/2024, QUA</p>
        </DivHoraHomer>

        <DivBtnHomer> 
            <BtnLoginHomer>Marcar Ponto</BtnLoginHomer>
        </DivBtnHomer>
    
        <DivRealizados>
            Realizadas
            <SubDivRealizados>08:03</SubDivRealizados>
            <SubDivRealizados>12:00</SubDivRealizados>
            <SubDivRealizados>14:00</SubDivRealizados>
            <SubDivRealizados style={{backgroundColor:"grey"}}>18:00</SubDivRealizados>
        </DivRealizados>

        <DivCalendario>
            calendario
        </DivCalendario>
        </>
    )
}

export default PageHome