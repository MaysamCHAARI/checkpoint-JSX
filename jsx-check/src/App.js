import "./App.css";
import ProfilePhoto from "./components/Profile/ProfilePhoto";
import FullName from "./components/Profile/FullName";
import Adresse from "./components/Profile/Adresse";

function App() {
  return (
    <div className="App">
      <br></br>
      <ProfilePhoto />
      <FullName />
      <hr></hr>
      <br></br>
      <Adresse />
    </div>
  );
}

export default App;
