import { Route, Routes, BrowserRouter } from "react-router-dom"
import PageHome from "../pages/Home/home"
// import PageHeader from "../components/Header/header"
// import PageFooter from "../components/Footer/footer"
import PageLogin from "../pages/Login/login"
import ErrorPage from "../routes/errorPage"

function PageRoutes(){
    return(
        <BrowserRouter>
            {/* <PageHeader/> */}
                    <Routes>
                        <Route path='/' element={<PageLogin/>}/> 
                        <Route path='/home' element={<PageHome/>}/>
                        <Route path='*' element={<ErrorPage/>}/>
                    </Routes>
                {/* <PageFooter/> */}
        </BrowserRouter>
    )
}

export default PageRoutes