//import "../styles/header.css";
import profile from "../assets/profile.jpg";
function Header() {
  return (
    <>
      <div className="header flex-container">
        <div className="">
          <h1 className="text-3 font-bold">My Portfolio</h1>
        </div>
        <div className="prof-img">
          <img src={profile} className="profile" alt="Berihun Photo" />
        </div>
      </div>
    </>
  );
}
export default Header;
