import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UseContext"

function App() {
  

  return (
   <UserContextProvider>
     <h1>CONTEXT API</h1>
     <Login/>
     <Profile/>
     </UserContextProvider>
    
  )
}

export default App
