import React, { useEffect, useState } from "react";
import ProfileContainer from "./profileContainer";
import { jwtPrivateKey } from "./../../config.json";
import PropagateLoader from "react-spinners/PropagateLoader";
import PersonService from "../../services/personService";
import LoginModal from "../modal/loginModal";

import "../../styles/profileContainerStyle.css";

export default function ViewUserPage({ user }) {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                PersonService.decryptToken(localStorage.getItem(jwtPrivateKey));
            } catch (err) {
                setIsLogin(true);
            }
        }, 300);
    }, []);

    return (
        <>
            {user ? (
                <div
                    className="view-user-info-container"
                    style={{ minHeight: "90vh", backgroundColor: "#f4f4f4" }}>
                    <div className="profile-header-container">
                        <h1>Account Setting</h1>
                    </div>
                    <ProfileContainer />
                </div>
            ) : (
                <div
                    style={{
                        minHeight: "80vh",
                        display: "grid",
                        placeItems: "center",
                    }}>
                    <PropagateLoader
                        color={"#0067a1"}
                        speedMultiplier={2}
                        loading={true}
                        size={20}
                    />
                    {isLogin && <LoginModal />}
                </div>
            )}
        </>
    );
}

const labelText = {
    verticalAlign: "center",
    paddingTop: "12px",
    fontWeight: "900",
    fontSize: "25px",
};
