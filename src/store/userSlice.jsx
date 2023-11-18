import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: '',
    age: 0,
    email: '',
    login: false
  }
}

//createSlice接收一個物件，裡面需要放三個屬性
// name 放名稱
// initialState 放最一開始初始化的狀態
// reducers 放如何改變state的function
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,  
  reducers: {
    //reducers裡的function有兩個參數可以使用，state跟action
    setLogin(state, action) {
      //action使用時機是，當需要使用外部參數去改變state時
      const {name, age, email}  = action.payload
      //state，就是可以去改面上面initialState的值，並且賦值，重新渲染
      state.profile =  {
        name,
        age, 
        email,
        login: true
      }
      
    },
    setLogout(state) {
      state.profile = {
        ...initialState.profile
      } 
    }
  } 

})

export const {setLogin, setLogout} = userSlice.actions
export default userSlice.reducer 