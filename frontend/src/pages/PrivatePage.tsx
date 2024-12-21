import React from "react";
import NavBar from "../components/NavBar.tsx";

const PrivatePage: React.FC = () => {
    return (
        <div className="fixed w-screen h-screen bg-background">
            <NavBar />
        </div>
    );
};

export default PrivatePage;