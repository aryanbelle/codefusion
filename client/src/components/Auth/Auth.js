import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";

function Auth(){
	const [reg,setReg] = useState(false);
	return(
		reg ? <Signup/> : <Login/>
	)
}
export default Auth;