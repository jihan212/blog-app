import './App.css';
import Blog from './Components/Blog';
import Homepage from './Components/Homepage';
import { useSelector } from "react-redux";
import { selectSignedIn } from "./features/userSlice";
import Navbar from './Components/Navbar';

function App() {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blog />}
    </div>
  );
}

export default App;
