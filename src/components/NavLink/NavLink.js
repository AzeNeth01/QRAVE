import { BrowserRouter } from "react-router-dom";


export default function NavLink(){


    return(

        <BrowserRouter>
         <Header /> 
         <Routes>
          <Route path = '/' element = { <Hero/> } />
          <Route path = '/about' element = { <Hero/> } />
          <Route path = '/solution' element = { <SolutionToClient/> } />
        </Routes> 
        </BrowserRouter>
    );
    
}