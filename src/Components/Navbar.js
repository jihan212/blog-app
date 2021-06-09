import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice.js";
import "../styling/navbar.css";

const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
      };
    
      const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
      };

    return (
        <div className="navbar">
            <h1 className="navbar__header">Backspace </h1>
            {isSignedIn && (
                <div className="blog__search">
                <input
                    className="search"
                    placeholder="Search for a blog"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="submit" onClick={handleClick}> Search </button>
                </div>
            )}

            {isSignedIn ? (
                <div className="navbar__user__data">
                <Avatar
                    className="user"
                    src={userData?.imageUrl}
                    alt={userData?.name}
                    />
                    <h1 className="signedIn">{userData?.givenName}</h1>
                    <GoogleLogout
                        clientId="861397195440-sdln7dph80air2vah0ugkn5e7rp2on31.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="logout__button"
                        > Logout </button>
            )}
            onLogoutSuccess={logout}
            />
          </div>
        ) : (
          <h1 className="notSignedIn">User not available !!</h1>
        )}
      </div>
    );
  };
  
  export default Navbar;