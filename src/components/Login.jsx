import { useSelector } from "react-redux/es/hooks/useSelector"
import { setLogout } from "../store/userSlice"
import { useDispatch } from "react-redux"

export default function Login() {

  const state = useSelector(state => state.user)
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(setLogout())
    
  }

  return(
    <div>
      <p>Name:{state.profile.name}</p>
      <p>Age:{state.profile.age}</p>
      <p>Email:{state.profile.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div> 
  )
}