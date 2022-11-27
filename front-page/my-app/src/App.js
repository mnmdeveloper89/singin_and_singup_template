import { Route, Routes, Navigate } from "react-router-dom";
import Axios from "axios";
import './App.css';
import Main from "./component/Main";
import Signup from "./component/Singup";
import Login from "./component/Login";


function App() {
	const user = localStorage.getItem("token");

	Axios({
		method: "GET",
		url: "http://127.0.0.1:3000/"
	  }).then(res => {
		console.log(res.data.message);
	  });


	return (
			<Routes>
				{user && <Route path="/" exact element={<Main />} />}
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/" element={<Navigate replace to="/login" />} />
			</Routes>
		
	);
}


export default App;

