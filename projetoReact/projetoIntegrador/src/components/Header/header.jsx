import logo from '../../assets/img/logo.jpg'
import { 
    Container,
    Img 
} from "./style"


function PageHeader(){
    return(
        <Container>
            <Img src={logo} alt='logo'/>
        </Container>
    )
} 

export default PageHeader