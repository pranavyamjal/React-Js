
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {
  

  return (
    <UserContextProvider >
      <h1>React || Context Api</h1>
      <Login />                               {/*  Rendering the components */}
      <Profile />                             {/*  Rendering the components */}
    </UserContextProvider>
  )
}

export default App
