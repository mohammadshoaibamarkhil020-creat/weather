import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Weathar from "./pags/weathar";
import Welcome from "./pags/welcome";
import Lauout from "./pags/lauout";
import Cities from './pags/citi'
import Map from "./pags/map"
import Setting from "./pags/setting";

const App = () => {
  const routers = createBrowserRouter([
    {
      path:"/",
      element:<Welcome/>
    },
    {
      path:"/main",
      element:<Lauout/>,
      children:[
        {
          path:"/main",
          element:<Weathar/>
        },
        {
          path:"/main/cities",
          element:<Cities/>
        },
        {
          path : "/main/map",
          element:<Map/>
        },
        {
          path:"/main/setting",
          element:<Setting/>
        }



      ]
    }
     
  ])
    
  return(
  <div>
    <RouterProvider router={routers}/>
  </div> 
  )
  
}

export default App;