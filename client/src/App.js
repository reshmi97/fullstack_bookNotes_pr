import './App.css';
import React from 'react';
import Modifies from "./components/Modifies";
import WelcomePage from "./components/Welcomepage";
import Allnotes from "./components/Allnotes";
import Read from "./components/Read";
import Notfound from './components/Notfound';
import AddNew from './components/AddNew';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';




const router =createBrowserRouter(
  [
    {
      path:"/",
      element:<WelcomePage />
    },
    {
      path:"/read/:id",
      element:<Read />
    },
    {
      path:"/edit/:id",
      element:<Modifies />
    },
    {
      path:"/allnotes",
      element:<Allnotes />
    },
    {
      path:"/addnew",
      element:<AddNew />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"*",
      element:<Notfound />
    },
  ]
)

function App() {
  
  return (
    <div><RouterProvider router={router} /></div>
  );
}

export default App;
