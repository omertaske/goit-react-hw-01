
import './App.css'
import Profile from './components/Profile/Profile'
import  userData  from "./userData.json";

function App() {
  
  return (
    <>
    <Profile
     username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
    
    
    />
     


      <div>
        <button>Sosyal Medya Ödevi</button>

      </div>



   
    </>
  )
}

export default App
