import React from "react";
import classes from "./NavBar.module.scss";
import PrimaryButton from "../../buttons/PrimaryButton";
import { useRouter } from "next/router";
import Link from "next/link";
import NavBarUserProfile from "./navbar-user-profile/NavBarUserProfile";

const NavBar = function () {
  const router = useRouter();
  const redirectHandler = function () {
    router.push("/");
  };

  // User profile picture url (state)
  let userPictureState =
    "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50";
  return (
    <header className={classes["nav-bar"]}>
      <h2 onClick={redirectHandler}>NJSQuestions</h2>
      <div>
        <nav>
          {/* if logged in */}
          {/* <NavBarUserProfile picture={userPictureState} /> */}
          {/* if NOT logged in */}
          <div className={classes["login-controls"]}>
            <PrimaryButton href="/login">Login</PrimaryButton>
            <Link className={classes.signup} href="/signup">
              Signup
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
