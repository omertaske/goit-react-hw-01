
import './App.css'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import  userData  from "./userData.json";
import friendsas from "./friendsList.json";
import transactions from "./transactions.json";

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
     


      <FriendList friends={friendsas}/>


    <TransactionHistory items={transactions}/>



</div>
</>
  )
}

export default App
