import './App.css';
import { useSelector } from "react-redux";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blog from './components/Blogs';
import { selectSignedIn } from './features/userSlice' 

const App = () => {

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="App">
       <Navbar />
       <Home />
      {isSignedIn && <Blog />}
      
    </div>
  );
};

export default App;
