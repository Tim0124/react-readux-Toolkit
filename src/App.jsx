import { configureStore } from '@reduxjs/toolkit'
import './App.css'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import userSlice from './store/userSlice'


//store 是一個Object的格式
const store = configureStore({
  //reducer 用來存放如何操作state、改變state以及怎麼取得state的function
  reducer: {
    //key value 定義的名稱很重要！
    user: userSlice

  } 
})

function App() {

  return (
    <Provider store={store}>
      <main>
        <h1>Practice ReduxToolkit</h1>
        <Profile/>
      </main>
    </Provider>
  )
}

export default App
