import { Outlet } from "react-router-dom";
// import './App.css';
import { CssBaseline } from "@mui/material";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Outlet />
        <CssBaseline/>


 <Footer/>
    </div>
  );
}

export default App;
