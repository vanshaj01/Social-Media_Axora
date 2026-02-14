import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/online";

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}ASSETS/gift.png`} alt="" />
          <span className="birthdayText">
            <b>Simon Minter</b> and 2 other friends have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src={`${PF}ASSETS/ade.jpg`} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information:</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfiItem">
            <span className="rightbarInfoKey">Occupation:</span>
            <span className="rightbarInfoValue">Student</span>
          </div>
          <div className="rightbarInfiItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">United States</span>
          </div>
          <div className="rightbarInfiItem">
            <span className="rightbarInfoKey">Relationship Status: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <button className="moreButton">More Information</button>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
