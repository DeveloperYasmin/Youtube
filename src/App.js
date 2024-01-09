import './App.css';
import { Provider } from 'react-redux';

import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/appStore';
import {RouterProvider, createHashRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter=createHashRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]}])

function App() {
  return (
   <Provider store={appStore}>

    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
          </div>
          </Provider>
         

  );
}

export default App;
