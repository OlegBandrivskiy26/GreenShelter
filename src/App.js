import './App.css';
// import VideoPage from './Components/VideoPage/VideoPage.jsx'
import TeamPage from "./Components/TeamPage/TeamPage"

import SecondPage from './Components/SecondPage/SecondPage';
import ThirdPage from './Components/ThirdPage/ThirdPage';

function App() {
  return (
    <div className="App">



      {/* SecondPage */}
      <SecondPage />

      {/* ThirdPage */}
      <ThirdPage />




      {/* <VideoPage/> */}
      <TeamPage />
    </div>
  );
}

export default App;
