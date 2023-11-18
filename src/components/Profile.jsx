import Login from "./Login";
import NotLogin from "./NotLogin";
import { useSelector } from "react-redux";


export default function Profile() {
  //useSelector是去使用我們定義好的state
  const state = useSelector(state => state.user)
  

  return (
    <div>
      {state.profile.login ? <Login/> : <NotLogin/>}
    </div>
  )
}