import './App.css';
import VideoPage from './Components/VideoPage/VideoPage.jsx'
import TeamPage from "./Components/TeamPage/TeamPage"

import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';
import Gallarey from './Components/Gallarey/Gallarey';






function App() {
  return (
    <div className="App">



      {/* SecondPage */}
      <SecondPage />

      {/* ThirdPage */}
      <ThirdPage />

       {/* <VideoPage/> */}
      <VideoPage/>
      
      {/* <Gallarey/> */}
      <Gallarey/>



     
      <TeamPage />
    </div>
  );
}

export default App;
