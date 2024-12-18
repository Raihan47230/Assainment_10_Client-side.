import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/HomePage/Home.jsx";
import Login from "./Components/AuthSystems/Login.jsx";
import Register from "./Components/AuthSystems/Register.jsx";
import AuthProviders from "./Components/AuthSystems/ProviderSystem/AuthProviders.jsx";
import AddVisa from "./Components/Addvisa/AddVisa.jsx";
import Roots from "./Components/Root.jsx/Roots.jsx";
import Allvisa from "./Components/Allvisa/Allvisa.jsx";
import MyAddVisa from "./Components/MyAddVisa/MyAddVisa.jsx";
import MyVisaApplicaition from "./Components/Myvisaapplicaition/MyVisaApplicaition.jsx";
import ViewDetails from "./Components/ViewDetails/ViewDetails.jsx";
import Protected from "./Components/ProtectedRoute/Protected.jsx";
import Update from "./Components/Update/Update.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/addvisa',
        element:<AddVisa></AddVisa>
      },
      {
        path:'/allvisa',
        element:<Allvisa></Allvisa>,
        loader:()=>fetch('https://assainment10serverside.vercel.app/allData')
        
      },
      {
        path:'/addmyvisa',
        element:<Protected><MyAddVisa></MyAddVisa></Protected>,
        loader:()=>fetch('https://assainment10serverside.vercel.app/myaddvisa')
      },
      {
        path:'/visaDetails/:id',
        element:<Protected><ViewDetails></ViewDetails></Protected>,
        loader:({params})=>fetch(`https://assainment10serverside.vercel.app/allData/${params.id}`)
        
      },
      {
        path:'/myvisaapplicaition',
        element:<Protected><MyVisaApplicaition></MyVisaApplicaition></Protected>,
        loader:()=>fetch('https://assainment10serverside.vercel.app/Raihan')
        
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://assainment10serverside.vercel.app/myaddvisa/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
