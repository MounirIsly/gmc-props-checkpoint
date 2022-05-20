import './App.css';
import Profile from './Profile/Profile';

function App() {
  const handleName = (name) => alert(name)
  return (
    <div className="App">
       <Profile fullName="Mounir Hadji" bio="I am a web developer!!" handleClick={()=>handleName("Hello Mounir Hadji")}>
         <img src='profileImg.jpg' alt='profile' />
       </Profile>
    </div>
  );
}

export default App;
