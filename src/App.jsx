
import './App.css'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import  userData  from "./userData.json";
import friendsas from "./friendsList.json";

function App() {
  
  return (
    <>
    <div className='friends-wrapper'>
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

      <FriendList friends={friendsas}/>




</div>
</>
  )
}

export default App
