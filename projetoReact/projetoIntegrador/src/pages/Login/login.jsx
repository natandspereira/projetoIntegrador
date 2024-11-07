import logo from "../../assets/img/logo.jpg"
import { 
    Container, 
    DivLogin,
    Input,
    Label,
    BtnLogin,
    H3,
    P,
    DivHeaderLogin,
    ImgLogo,
    DivCorVerde
    
} from "./style"




function PageLogin(){
    return(
    <> 
         <DivHeaderLogin>
                <ImgLogo src={logo} alt=""/>
        </DivHeaderLogin>
        
        <Container>
            <DivLogin> 
                
                <Label> 
                    <H3>Nome</H3>
                    <Input type="text"  placeholder="Nome" />
                </Label>

               <Label> 
                    <H3>Senha</H3>
                    <Input type="text" placeholder="Senha"/>
               </Label>
                <P>Esqueci a senha</P>
               <BtnLogin>Entrar</BtnLogin>
            </DivLogin>
        </Container>

        <DivCorVerde></DivCorVerde>
    </>
    )
}

export default PageLogin