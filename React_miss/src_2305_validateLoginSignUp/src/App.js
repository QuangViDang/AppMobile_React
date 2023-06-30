import "./index";
import Demo from "./modules_auth/Demo";
import Clock from "./modules_auth/Clock";
import Login from "./Login_SignUp/Login";


function App() {
  return (
    <div>
      <Demo/>
      {/* <Clock/> */}
      <Login/>
    </div>
  );
}

export default App;
