import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'             // We are not using the App.jsx here instead routes / reactRouter
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
// import Github from './components/Github/Github.jsx'                         Since using the loader from react router
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//       path: "",
//       element: <Home />
//       },
//       {
//          path: "about",
//          element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//      }
//     ],
  
//   }
// ])


// Another way to set route

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout />} >    { /*Root element & below are children of it and in Layout we have already defined the header and footer as constant */}


    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />

    <Route path='user/:userid' element={<User />} />
   
   { /* <Route path='github' element={<Github />} />       commented to use the loader of react router */ }

    <Route loader={githubInfoLoader} path='github' element={<Github />} />



  </Route>                /* End of the Root*/

  // Loader - Each route can define a "loader" function to provide data to the route element before it renders

)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>      {/* Providing the router configuration to the app */}
  </React.StrictMode>,
)
