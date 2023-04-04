import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {
  let maxHeight;
  if(window.innerHeight<=800){
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className='app-videos'>
        {video.map((item) => {
          return (<Video
            likes={item.likes}
            messages={item.messages}
            shares={item.shares}
            name= {item.name}
            description= {item.description}
            music= {item.music}
            url= {item.url}/>)
        })}
        {/* <Video
          likes={444}
          messages={333}
          shares={666}
          name="Pedinho gameplays"
          description="Meu carro aí"
          music="atumalaca"
          url="https://cdn.discordapp.com/attachments/1090790629765824512/1091495290256756808/SaveTube.App-A_T_U_M_A_L_A_C_A-480p.mp4" /> */}
      </div>
    </div>
  );
}

export default App;
