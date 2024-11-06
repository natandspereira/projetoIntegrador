import logo from "../../assets/img/logo.jpg"

import { 
    Container, 
    DivLogin,
    Input,
    Label,
    BtnLogin,
    Img,
    H3
    
} from "./style"




function PageLogin(){
    return(
        <Container>
            <DivLogin> 
                <Img src={logo} alt="logo"/>
                <Label> 
                    <H3>Nome</H3>
                    <Input type="text"  placeholder="Nome" />
                </Label>

               <Label> 
                    <H3>Senha</H3>
                    <Input type="text" placeholder="Senha"/>
               </Label>

               <BtnLogin>Login</BtnLogin>
            </DivLogin>
        </Container>
    )
}

export default PageLogin