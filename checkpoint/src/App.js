import "./App.css";
import avatar from "./assets/avatar.png";
import ProfileComponent from "./profile/profileComponent";
import profile from "./assets/dummy";
function App() {
  const mainContainer = {
    backgroundColor: "#fff",
    width: "50%",
    marginTop: "2em",
    padding: "2em",
    position: "absolute",
    left: "20%",
    border: "1px solid #eee",
    boxShadow: "0 px 3px #ccc",
  };

  return (
    <div className="App" style={mainContainer}>
      <ProfileComponent
        fullName={profile.fullName}
        bio={profile.bio}
        Profession={profile.Profession}
      >
        <img src={avatar}></img> Profile Picture
      </ProfileComponent>
    </div>
  );
}

export default App;
