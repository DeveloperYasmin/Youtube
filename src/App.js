import './App.css';
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/appStore';
import {RouterProvider, createHashRouter, Outlet } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
function App() {
  const AppLayout =() =>{
  return (
    <Provider store={appStore}>
     <div>
       <Head/>
       <Outlet/>
           </div>
           </Provider>
);
  }
  
const appRouter=createHashRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:[<Body/>,<MainContainer/>]
    },
    
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]},])
  ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)  
}

export default App;
