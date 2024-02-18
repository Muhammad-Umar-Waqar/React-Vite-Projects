
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'


function App() {

  return (
    <UserContextProvider>
            {/* <h1 className='text-3xl font-bold underline'>Muhammad Umar Here in the world of Programming</h1> */}
            <Login />
            <Profile/>
    </UserContextProvider>
  )
}
export default App
