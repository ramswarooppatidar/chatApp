import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import {createHashRouter, RouterProvider, createBrowserRouter} from "react-router-dom"

function App() {
  // for hosting  ceateHashRouter
  const router = createHashRouter([
    {
      path:'/',
      element: <Home />
    }
  ])
  // const router = createBrowserRouter([
  //   {
  //     path:'/chatApp',
  //     element: <Home />
  //   }
  // ])
  return (
    <>

    <RouterProvider router={router} />
    {/* <h1>welcom to sidebar !</h1> */}
    {/* <Home/> */}
    </>
  );
}

export default App;
