import { useDispatch } from "react-redux"
import { setLogin } from "../store/userSlice"
import { useRef } from "react"
//useDispatch是讓我們去使用我們定義好的function


export default function NotLogin() {
  const nameRef = useRef(null)
  const ageRef = useRef(null)
  const emailRef = useRef(null)
  const dispatch = useDispatch()
  
  function handleLogin() {
    const nameValue = nameRef.current.value
    const ageValue = ageRef.current.value
    const emailValue = emailRef.current.value
    dispatch(setLogin({
      name: nameValue,
      age: ageValue,
      email: emailValue
    }))
  }
 
  return(
    <div>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" ref={nameRef}/>
        </p>
        <p>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="age" placeholder="Age" ref={ageRef}/>
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" ref={emailRef}/>
        </p>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}