import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import './App.css';
import Icons from './Icons/Icons';
import Posts from './Posts/Posts';
import Video from './Video/Video';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App flex flex-col text-white h-screen w-[40vw]">
      <Navbar />
      <Profile />
      <Icons />
      <Posts />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
